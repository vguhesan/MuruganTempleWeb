#### Welcome to MuruganTemple.org git source-code site

Site is built on Hugo Static Site generator.

### How to generate static tree?
tree -H '/banner-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./static/banner-images/ > ./static/banner-images/index.html
tree -H '/slider-images' -L 1 --noreport --charset utf-8 -P "*.jpg|*.png" ./static/slider-images/ > ./static/slider-images/index.html

### Hugo generate localhost server for development
hugo server -D
hugo server -D --bind=0.0.0.0 --baseURL=http://0.0.0.0:1313
