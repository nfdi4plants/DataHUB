#!/bin/bash

set -ex

for patch in /scripts/patches/*.patch; do
	patch -p0 < "$patch"
done

for script in /scripts/patches/*.sh; do
	"$script"
done
