#!/bin/bash

set -ex

find /opt/gitlab/embedded/service/gitlab-rails/app/views/profiles/
ls -la /opt/gitlab/embedded/service/gitlab-rails/app/views/profiles/accounts/show.html.haml
ls -la /opt/gitlab/embedded/service/gitlab-rails/lib/gitlab/project_template.rb 

for patch in /scripts/patches/*.patch; do
	patch -p0 < "$patch"
done


for script in /scripts/patches/*.sh; do
	"$script"
done
