#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:lukmanahromi/portfolio.git master:gh-pages

cd -npm install --save aos@next