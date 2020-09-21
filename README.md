#### Welcome to MuruganTemple.org git source-code site

The source code drives https://www.MuruganTemple.org/ website. It is built using Hugo Static Website Generator. It's sister repo (https://github.com/murugantemple/murugantemple.github.io) is the latest generated public folder that drives the website.

### Screenshots
![Screenshot #1](https://github.com/vguhesan/MuruganTempleWeb/blob/master/static/img/screenshots/site1-sml.jpg)
![Screen-shot #2](https://github.com/vguhesan/MuruganTempleWeb/blob/master/static/img/screenshots/site2-sml.jpg)

### Hugo generate localhost server for development
hugo server -D
hugo server -D --bind=0.0.0.0 --baseURL=http://0.0.0.0:1313

when ready to deploy use "auto-deploy-to-github.sh" to deploy.

### Steps for deployment to GITHub

The "public" directory is stored under a different murugantemple account for leveraging github-pages feature.

Site is deployed using GitHub - Pages.
git remote add origin https://github.com/murugantemple/murugantemple.github.io.git

cd ./static; tree -H '/banner-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./banner-images/ > ./banner-images/index.html; tree -H '/slider-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./slider-images/ > ./slider-images/index.html; cd ..;
