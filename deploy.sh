#!/bin/bash
echo "Building Production Deployment..."
start=$(date +%s)
export CI=''
yarn install
yarn run build
sleep 1
now=$(date +%s)

echo "$VERSION"
echo "Time spent in CI Build:"
echo "$((now-start))"
