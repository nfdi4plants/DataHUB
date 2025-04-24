#!/bin/bash

set -ex

for patch in /scripts/patches/*.patch; do
	echo "Applying $path ..."
	patch -p0 < "$patch"
done


for script in /scripts/patches/*.sh; do
	echo "Running $script ..."
	"$script"
done
