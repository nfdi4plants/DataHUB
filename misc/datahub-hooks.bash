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

get_publication_link() {
	if [ -z "$archigator_url" ] || [ -z "$archigator_user" ] || [ -z "$archigator_password" ]; then
		echo "Archigator publication microservice not configured. Skipping..."
		return
	fi
	basic_auth="$( \
		echo -n "${archigator_user}:${archigator_password}" | base64
	)"
	ret="$(curl -k -L -X POST \
		-H 'Content-Type: application/json' \
		-H "Authorization: Basic ${basic_auth}" \
		-d '{"project_id": '$project_id'}' \
		"${archigator_url}/api/v1/setup/generatelink"
	)"
	link_url="$(jq -r '.link // empty' <<< "$ret")"
	if [ -z "$link_url" ]; then
		echo "Could not retrieve publication link from archigator."
		return
	fi
	echo "$link_url"
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

# setup logging
declare -rg log_file="/var/log/datahub/${0##*/}.$$.log"
exec &> "$log_file"

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

# Get the event from stdin 
json="$(cat -)"

event_type="$(jq -r '.object_kind // empty' <<< "$json")"
event_name="$(jq -r '.event_name // empty' <<< "$json")"
event_ref="$(jq -r '.object_attributes.ref // empty' <<< "$json")"
event_id="$(jq -r '.object_attributes.id // empty' <<< "$json")"

if { [ -n "$event_type" ] && [ "$event_type" != "pipeline" ]; } \
	|| { [ -n "$event_name" ] && [ "$event_name" != "project_create" ]; }; then
	echo "Ignoring $event_type | $event_name"
	exit 0
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

# Handle debug mode
if [ "$HOOK_DEBUG" = "1" ]; then
	set -x
fi

project_id="$(jq -r '.project.id // empty' <<< "$json")"
# for the event "project_create" the project id is in .project_id
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

	if [ "$event_ref" = "$arc_badges_branch_name" ] || [ "$event_ref" = "master" ]; then
		echo "Pushing event to the ARC registry...."
		arc_registry_push
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

	[ "$event_ref" = "$arc_badges_branch_name" ] && purge_badges
	[ "$event_ref" = "master" ] && purge_badges

	commit_id="$(jq -r '.commit.id // empty' <<< "$json")"
	if [ -z "$commit_id" ]; then
		echo "Failed to find commit id triggering the pipeline... exiting."
		exit 1
	fi

	job_ids=($(jq -r '.builds[] | select(.stage=="'"${arc_validation_stage_name}"'") | .id // empty' <<< "$json"))
	if [ "${#job_ids[@]}" = 0 ]; then
		echo "Failed to find job ids."
		exit 1
	fi

	commit_payload='
	{
	  "branch": "'"$arc_quality_control_branch_name"'",
	  "commit_message": "Results for commit: '$commit_id'",
	  "actions": []
	}'

	for job_id in ${job_ids[@]}; do
	
		tmp_dir="$(mktemp -d)"
		cd "$tmp_dir"
		job_artifacts_path="${project_id}.${job_id}.artifacts.zip"
		ret="$(curl -k -L \
			-H "PRIVATE-TOKEN: $api_token" \
			"${CI_API_V4_URL}/projects/${project_id}/jobs/${job_id}/artifacts" \
			> "$job_artifacts_path"
		)"
		echo "Fetching job (${job_id}) artifacts for project ${project_id} returned: $ret"
		unzip "$job_artifacts_path"
		rm -f "$job_artifacts_path"
		
		validation_results=($(find . -type f -name "*.svg" -or -name "*.xml"))
		for file in "${validation_results[@]}"; do
	
			file="${file:2}"
			file_urlencoded="$(echo -n "$file" | jq -sRr @uri)"

			ret="$(curl -k -L -s -o /dev/null \
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
			# check for svg suffix and only for the configured branch for badges
			[ "$file" = "${file%.svg}" ] && continue
			! ( [ "$event_ref" != "$arc_badges_branch_name" ] || [ "$event_ref" != "master" ] ) && continue
			
			badge_name="validation-$(echo -n ${file%%@*} | tr '/' '-')"
			echo "badge name: $badge_name"

			# TODO determine badge URL depending on the return code of the arc-validate tool
			# TODO: Idea: make the 'get_publication_link' function overwritable through sourcing of the configuration file?
			badge_url="${CI_SERVER_URL}/${project_name}/-/pipelines/${event_id}/test_report"
			#badge_url="$(get_publication_link)"
			ret="$(curl -k -L -X POST \
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
		done

		# cleanup artifact dir
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
