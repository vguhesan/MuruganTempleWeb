#!/usr/bin/env bash
rm ~/Projects/2save/MTNAv2/WebSites/www/public/banner-images/*
rm ~/Projects/2save/MTNAv2/WebSites/www/public/slider-images/*
#cd ~/Projects/2save/MTNAv2/WebSites/www/public
#git pull
cd ~/Projects/2save/MTNAv2/WebSites/www

hugo -D
cd ./public
tree -H '/banner-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./banner-images/ > ./banner-images/index.html
tree -H '/slider-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./slider-images/ > ./slider-images/index.html
git add .
outfile="Latest Site Updated Commit From: $(date +%Y%m%d)"
git commit -m "${outfile}"
git push -u origin master
cd ~/Projects/2save/MTNAv2/WebSites/www

