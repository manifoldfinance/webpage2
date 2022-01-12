#!/bin/bash
start=$(date +%s)
export CI=''
yarn install
yarn run build
git hash-object --no-filters  public/.well-known/security.txt
export VERSION=$(git rev-parse --short HEAD)
sleep 1
now=$(date +%s)

echo "Build Complete"
echo "$VERSION"
echo "Build time in seconds:"
echo "$((now-start))"
