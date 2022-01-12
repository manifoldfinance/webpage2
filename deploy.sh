#!/bin/bash
start=$(date +%s)
export CI=''
yarn install
yarn run build
VERSION=$(git rev-parse --short HEAD)
sleep 1
now=$(date +%s)

echo "\n"
echo "$VERSION"
echo "$((now-start))"
