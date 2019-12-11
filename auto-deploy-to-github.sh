#!/usr/bin/env bash
#cd ~/Projects/2save/MTNAv2/WebSites/www/public
#git pull
cd ~/Projects/2save/MTNAv2/WebSites/www
hugo -D
cd ./public
tree -H '/banner-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./banner-images/ > ./banner-images/index.html
tree -H '/slider-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./slider-images/ > ./slider-images/index.html
git add .
git commit -m "latest commit"
git push -u origin master
cd ~/Projects/2save/MTNAv2/WebSites/www

