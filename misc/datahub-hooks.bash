#!/bin/bash
#
# This script relies on an external configuration file named
# 'datahub-secrets.include' to function properly. This file
# must be mounted within the datahub docker container under
# '/etc/gitlab/datahub-secrest.include' for this script to be
# able to read it.
#
# If that file is missing the script will do basically nothing.
#
# You can activate more logging output using the HOOK_DEBUG
# variable defined in the secrets file. HOOK_DEBUG set to 1
# will log all the commands being executed within a file.
# You can change the value on-the-fly as it is read everytime
# this scripts executes without the need to restart the docker
# container.
#
# *IMPORTANT NOTE*: If debug logging is active, API tokens will
# be printed as part of the commands within the logfile.
# Be careful who you send this log to avoid credentials leaks!

# TODO: idea wrap the curl request to use the standard options
authenticated_request() {
	:
}

# TODO: function to create badge using the 3 arguments expected
# by the API: name, link_name, link_url
create_badge() {
	:
}

arc_registry_push() {
	if [ -z "$arc_registry_endpoint" ] || [ -z "$arc_registry_token" ]; then
		echo "ARC Registry endpoint or token not configured. Skipping..."
		return
	fi
	user_email="$(jq -r '.commit.author.email // empty' <<< "$json")"
	if [ -z "$user_email" ]; then
		echo "Failed to find email of commit for the pipeline... continuing."
	fi
	ret="$(curl -k -L -X POST \
		-H "Content-Type: application/json" \
		-H "X-Gitlab-Token: $arc_registry_token" \
		-d "$json" \
		"$arc_registry_endpoint"
	)"
	echo "ARC registry push returned: $ret"
}

purge_badges() {
	ret="$(curl -k -L -X GET \
		-H "PRIVATE-TOKEN: $api_token" \
		"${CI_API_V4_URL}/projects/${project_id}/badges"
		)"
	for badge_id in $(jq -r '.[] | select(.name | startswith("validation-")).id' <<< "$ret"); do
		# badge found, delete it
		ret="$(curl -k -X DELETE \
			-H "PRIVATE-TOKEN: $api_token" \
			"${CI_API_V4_URL}/projects/$project_id/badges/$badge_id"
		)"
	done	
}

## MAIN

# setup logging & trap to clear uninteresting logfiles, if configured
declare -rg log_file="/var/log/datahub/${0##*/}.$$.log"
exec &> "$log_file"
trap '[ "$?" = "2" ] && rm -f -- "$log_file"' EXIT

# declare global variables
declare -rg arc_validation_stage_name="arc_validation"
declare -rg arc_badges_branch_name="main"
declare -rg arc_quality_control_branch_name="cqc"

# check for secrets required to use the various APIs
declare -rg datahub_secrets="/etc/gitlab/datahub-secrets.include"
if [ ! -e "$datahub_secrets" ]; then
	echo "DataHUB secret file not found at '$datahub_secrets'. Exiting..."
	exit 1
fi

# check for additional functions to include
declare -rg datahub_functions="/etc/gitlab/datahub-functions.include"
if [ -e "$datahub_functions" ]; then
	if bash -n "$datahub_functions"; then
		. "$datahub_functions"
	fi
else
	echo "DataHUB function file not found at '$datahub_functions'..."
fi

## Preliminary checks are complete, let's read the configuration file
. "$datahub_secrets"

if [ -z "$CI_SERVER_URL" ]; then
	echo "CI_SERVER_URL not set. Exiting..."
	exit 1
fi

if [ -z "$api_token" ]; then
	echo "api_token not set. Exiting..."
	exit 1
fi

shopt -s extglob

if [ "$HOOK_DEBUG" -ge 1 ]; then
	set -x
fi

# Get the event from stdin
json="$(cat -)"

event_type="$(jq -r '.object_kind // empty' <<< "$json")"
event_name="$(jq -r '.event_name // empty' <<< "$json")"
event_ref="$(jq -r '.object_attributes.ref // empty' <<< "$json")"
event_id="$(jq -r '.object_attributes.id // empty' <<< "$json")"

if { [ -n "$event_type" ] && [ "$event_type" != "pipeline" ]; } \
	|| { [ -n "$event_name" ] && [ "$event_name" != "project_create" ]; }; then
	echo "Ignoring $event_type | $event_name"
	exit 2
fi

# for event_types the project id is in .project.id
project_id="$(jq -r '.project.id // empty' <<< "$json")"
# for event_name the project id is in .project_id
[ -z "$project_id" ] && project_id="$(jq -r '.project_id // empty' <<< "$json")"

project_name="$(jq -r '.project.path_with_namespace // empty' <<< "$json")"
# for the event "project_create" the project name is in: .path_with_namespace
[ -z "$project_name" ] && project_name="$(jq -r '.path_with_namespace // empty' <<< "$json")"

if [ -z "$project_id" ]; then
	echo "Could not get the project id."
	exit 1
fi

if [ -z "$project_name" ]; then
	echo "Could not get the project name."
	exit 1
fi

if [ "$event_name" = "project_create" ]; then
	ret="$(curl -k -L -X POST \
		-H "PRIVATE-TOKEN: $api_token" \
		-H "Content-Type: application/json" \
		-d '{
			"name": "pipeline-badge",
			"link_url": "'"${CI_SERVER_URL}"'/%{project_path}/commits/%{default_branch}",
			"image_url": "'"${CI_SERVER_URL}"'/%{project_path}/badges/%{default_branch}/pipeline.svg"
		}' \
		"${CI_API_V4_URL}/projects/$project_id/badges"
	)"
	echo "pipeline badge creation: $ret"

fi

if [ "$event_type" = "pipeline" ]; then
	pipeline_status="$(jq -r '.object_attributes.status // empty' <<< "$json")"
	if [ "$pipeline_status" != "manual" ] && [ "$pipeline_status" != "success" ] && [ "$pipeline_status" != "failed" ]; then
		echo "Pipeline not done yet!"
		exit 1
	fi

	ret="$(curl -k -L -o /dev/null -s -w "%{http_code}" \
		-H "Content-Type: application/json" \
		-H "PRIVATE-TOKEN: $api_token" \
		"${CI_API_V4_URL}/projects/${project_id}/repository/branches/${arc_quality_control_branch_name}"
	)"
	if [ "$ret" == "404" ]; then
		echo "branch does not exists, create it"
		tmp_dir="$(mktemp -d)"
		cd "$tmp_dir"
		git init -b "main" .
		git commit --allow-empty --author "DataHUB CI <ci@datahub>" -m "Quality control branch"
		ret="$(git push \
			https://oauth:${api_token}@${CI_SERVER_URL##*/}/${project_name} \
			main:${arc_quality_control_branch_name}
		)"
		echo "$arc_quality_control_branch_name branch creation: $ret"
		cd -
		rm -rf "$tmp_dir"
	elif [ "$ret" == "200" ]; then
		echo "$arc_quality_control_branch_name branch exists."
	else
		echo "$arc_quality_control_branch_name branch check: $ret"
	fi

	if [ "$event_ref" = "$arc_badges_branch_name" ] || [ "$event_ref" = "master" ]; then
		echo "Cleaning badges..."
		purge_badges
		echo "Pushing event to the ARC registry...."
		arc_registry_push
	fi

	commit_id="$(jq -r '.commit.id // empty' <<< "$json")"
	if [ -z "$commit_id" ]; then
		echo "Failed to find commit id triggering the pipeline... exiting."
		exit 1
	fi

	# prepare the commit json body
	commit_payload='
	{
	  "branch": "'"$arc_quality_control_branch_name"'",
	  "commit_message": "Results for commit: '$commit_id'",
	  "actions": []
	}'

	# parse the job names and their ids
	declare -A ci_jobs
	jq -r '.builds[] | select(.stage=="'"${arc_validation_stage_name}"'") | "\(.name) \(.id)"' <<< "$json"
	while read -r line; do
		read -r job_name job_id _ <<< "$line"
		ci_jobs["${job_name#validate-}"]="$job_id"
	done < <(jq -r '.builds[] | select(.stage=="'"${arc_validation_stage_name}"'") | "\(.name) \(.id)"' <<< "$json")
	readonly ci_jobs
	declare -p ci_jobs

	if [ "${#ci_jobs[@]}" = 0 ]; then
		echo "Failed to find jobs."
		exit 1
	fi

	for job_name in "${!ci_jobs[@]}"; do
		job_id="${ci_jobs["$job_name"]}"
		tmp_dir="$(mktemp -d)"
		cd "$tmp_dir"
		echo "Fetching job (${job_id}) artifacts for project ${project_id}..."
		job_artifacts_path="${project_id}.${job_id}.artifacts.zip"
		curl -k -L \
			-H "PRIVATE-TOKEN: $api_token" \
			"${CI_API_V4_URL}/projects/${project_id}/jobs/${job_id}/artifacts" \
			> "$job_artifacts_path"
		# the following is kinda lazy, TODO better
		unzip "$job_artifacts_path"
		if [ "$?" != 0 ]; then
			# something went wrong with the job, skip
			echo "Job ${job_id} did not create a valid zip. Skipping."
			continue
		fi
		rm -f "$job_artifacts_path"

		# detect the name of the validation package through the result folder
		# it should be: <branch>/<package>@<version>
		validation_package_results_folder="$(find * -mindepth 1 -type d -name "*$job_name*")"
		echo "Results: $validation_package_results_folder"
		if [ ! -d "$validation_package_results_folder" ]; then
			echo "Failed to find package result directory of $job_name..."
			continue
		fi

		# we want to upload all the files created by the validation package
		# in the quality control branch.
		for file in "${validation_package_results_folder}/"*; do
			echo "Working on file: $file"
			file_urlencoded="$(echo -n "$file" | jq -sRr @uri)"
			ret="$(curl -k -s -o /dev/null \
				-w %{http_code} \
				-H "Content-Type: application/json" \
				-H "PRIVATE-TOKEN: $api_token" \
				"${CI_API_V4_URL}/projects/${project_id}/repository/files/${file_urlencoded}?ref=${arc_quality_control_branch_name}"
			)"
			action="update"
			if [ "$ret" != "200" ]; then
				# the file does not exist, action -> create
				action="create"
			fi
			file_data="$(base64 -w0 "$file")"
			commit_payload="$(jq '
				.actions += [{
				  "action": "'$action'",
				  "file_path":"'$file'",
				  "encoding": "base64",
				  "content": "'$file_data'"
				}]
				' <<< "$commit_payload"
	
			)"
			# Note: the actual commit is done after iterating over all jobs.

			## Create badge if needed
   			if [ "${file##*/}" = "badge.svg" ] && { [ "$event_ref" = "$arc_badges_branch_name" ] || [ "$event_ref" = "master" ]; }; then
				# we'll use a hardcoded name of the badge here, eventually need to change that in the future
				file="${validation_package_results_folder}/badge.svg"
				if [ ! -f "$file" ]; then
					echo "Badge not found at expected path: $file"
					continue
				fi

				badge_name="validation-$(echo -n ${file%%@*} | tr '/' '-')"
				echo "badge name: $badge_name"

				# Determine the URL for the badge. Defaults to GitLab test report page
				badge_url="${CI_SERVER_URL}/${project_name}/-/pipelines/${event_id}/test_report"
				summary_file="${validation_package_results_folder}/validation_summary.json"
				if [ "$badge_name" = "validation-main-invenio" ] && [ "$(jq -r .Critical.HasFailures "$summary_file")" = "false" ]; then
					# Use the publication URL, if it is defined
					if declare -F get_publication_link > /dev/null; then
						badge_url="$(get_publication_link)"
					fi
				fi
				if [ "$badge_name" = "validation-main-odrl" ] && [ -f "${validation_package_results_folder}/offer.pdf" ]; then
					badge_url="${CI_SERVER_URL}/%{project_path}/-/blob/${arc_quality_control_branch_name}/${validation_package_results_folder}/offer.pdf"
				fi
				ret="$(curl -k -X POST \
					-H "PRIVATE-TOKEN: $api_token" \
					-H "Content-Type: application/json" \
					-d '{
						"name": "'"${badge_name}"'",
						"link_url": "'"${badge_url}"'",
						"image_url": "'"${CI_SERVER_URL}"'/%{project_path}/-/raw/'"${arc_quality_control_branch_name}"'/'"${file_urlencoded}"'?inline=false"
					}' \
					"${CI_API_V4_URL}/projects/$project_id/badges"
				)"
				echo "Badge creation returned: $ret"
			fi
		done

		# cleanup temporary job artifacts directory
		cd -
		rm -rf "$tmp_dir"
	done

	ret="$(curl -k -L -X POST \
	  -H "PRIVATE-TOKEN: $api_token" \
	  -H "Content-Type: application/json" \
	  -d "$commit_payload" \
	  "${CI_API_V4_URL}/projects/${project_id}/repository/commits"
	)"

	echo "Commit returned: $ret"
fi
