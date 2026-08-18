#!/bin/bash

set -e

set -- /opt/gitlab/embedded/service/gitlab-rails/public/assets/webpack/pages.projects.imports.new.*.chunk.js

# exit if above's glob matches nothing or more than 1 file
[ -e "$1" ] && [ "$#" = "1" ]

# the mighty "patch"
sed -Ei.bak \
	's/sample:(\{text:Object\([^)]+\))/arc:\1("ProjectTemplates|ARC"),icon:".template-option .icon-gitlab_logo"},&/' \
	"$1"

# needs to be gzip'ed too
gzip -kf "$1"

# print diffs to see what was done
diff -u "$1" "${1}.bak" || true
