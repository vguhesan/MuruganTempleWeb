#### Welcome to MuruganTemple.org git source-code site

Site is built on Hugo Static Site generator.

### How to generate static tree?
tree -H '/banner-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./static/banner-images/ > ./static/banner-images/index.html
tree -H '/slider-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./static/slider-images/ > ./static/slider-images/index.html

### Hugo generate localhost server for development
hugo server -D
hugo server -D --bind=0.0.0.0 --baseURL=http://0.0.0.0:1313


### Steps for deplyment to GITHub
# git remote add origin https://github.com/murugantemple/murugantemple.github.io.git

cd ~/Projects/2save/MTNAv2/WebSites/www
hugo -D
cd ./public
tree -H '/banner-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./banner-images/ > ./banner-images/index.html
tree -H '/slider-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./slider-images/ > ./slider-images/index.html
git add .
git commit -m "latest commit"
git push -u origin master


