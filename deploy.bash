bundle exec jekyll build
rm -rf categories
rm -rf tags
cp -r _site/categories .
cp -r _site/tags .
git add categories
git add tags
git commit -m 'deploy categories and tags.'