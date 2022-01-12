#!/bin/bash
echo "Building Production Deployment..."
start=$(date +%s)
export CI=''
yarn install
yarn run build
sleep 1
now=$(date +%s)

echo "$VERSION"
echo "$((now-start))"
