npm run build

cd ../docs/.vitepress/dist

git init
git add .
git commit -m 'deploy to the gh-pages'

git remote add origin https://github.com/bearmiao2001/bearmiao2001.git
git branch -M main
git push -f origin main

rm -rf ./.git