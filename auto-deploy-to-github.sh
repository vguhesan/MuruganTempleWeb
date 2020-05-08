#!/usr/bin/env bash
mkdir -p ./public/
rm ./public/banner-images/*
rm ./public/slider-images/*

#git pull
cd ./static
tree -H '/banner-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./banner-images/ > ./banner-images/index.html
tree -H '/slider-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./slider-images/ > ./slider-images/index.html
cd ..
hugo -D
cd ./public
#tree -H '/banner-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./banner-images/ > ./banner-images/index.html
#tree -H '/slider-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./slider-images/ > ./slider-images/index.html
git add .
outfile="Latest Site Updated Commit From: $(date +%Y%m%d)"
git commit -m "${outfile}"
git push -u origin master
pwd


