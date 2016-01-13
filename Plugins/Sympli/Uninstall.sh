#!/bin/sh

rm -rf "$HOME/Library/Application Support/com.bohemiancoding.sketch3/Plugins/Sympli"
rm -rf "$HOME/Library/Containers/com.bohemiancoding.sketch3/Data/Library/Application Support/com.bohemiancoding.sketch3/Plugins/Sympli"

/usr/sbin/pkgutil --forget "com.eastbanctech.sketch.sympli.plugin" >/dev/null 2>&1

exit 0
