#!/bin/bash
set -euo pipefail
shopt -s nullglob

patched=0
for file in /opt/gitlab/embedded/service/gitlab-rails/public/assets/webpack/pages.projects.imports.new.*.chunk.js; do
    # Some bundles only load code from another chunk.
    if ! grep -Fq 'sample:{text:' "$file"; then
        continue
    fi

    count=$(grep -oF 'sample:{text:' "$file" | wc -l)
    if [[ "$count" -ne 1 ]]; then
        echo "Expected one sample template definition in $file; found $count" >&2
        exit 1
    fi

    if grep -Fq 'arc:{text:' "$file"; then
        echo "ARC template definition already exists in $file" >&2
        exit 1
    fi

    sed -i 's/sample:{text:/arc:{text:"ARC",icon:".template-option .icon-gitlab_logo"},sample:{text:/' "$file"
    grep -Fq 'arc:{text:"ARC",icon:".template-option .icon-gitlab_logo"},sample:{text:' "$file"

    gzip -kf "$file"
    # Remove any stale Brotli copy containing unpatched code.
    rm -f "${file}.br"
    echo "Added ARC template to $(basename "$file")"
    patched=$((patched + 1))
done

if [[ "$patched" -eq 0 ]]; then
    echo "No sample template mapping found; ARC frontend patch was not applied" >&2
    exit 1
fi
