#!/usr/bin/env sh

set -e

npm run build

cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:KvRm/vue3_ts_vite_2048-game.git main:gh-pages

cd -
