rm -rf tags/*
rm -rf categories/*
rm -rf categories
rm -rf tags

bundle exec jekyll build

cp -r _site/categories .
cp -r _site/tags .
git add categories
git add tags
git commit -m 'deploy categories and tags.'