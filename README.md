#### Welcome to MuruganTemple.org git source-code site

Site is built on Hugo Static Site generator.

### Hugo generate localhost server for development
hugo server -D
hugo server -D --bind=0.0.0.0 --baseURL=http://0.0.0.0:1313

### Steps for deployment to GITHub

The "public" directory is stored under murugantemple account for leveraging github-pages feature.
Site is deployed using GitHub - Pages.
git remote add origin https://github.com/murugantemple/murugantemple.github.io.git

cd ~/Projects/2save/MTNAv2/WebSites/www
./auto-deploy-to-github.sh
