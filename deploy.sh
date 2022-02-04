#!/usr/bin/env bash
echo "Clearing Cache.."
rm -rf build/
echo "Loading .env configuration..."
export $(cat .env | xargs)
start=$(gdate +%s)

echo "Building Production Deployment..."
yarn install
yarn run prod
vercel deploy --prod
npx gh-pages -d build/
echo "Production Deployment Complete!"
now=$(gdate +%s)

sleep 1


yarn run start "$VERSION" new -e ENVIRONMENT -t $((now-start))