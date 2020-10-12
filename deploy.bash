rm -rf categories
rm -rf category
rm -rf tags

git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"

jekyll build

cp -r _site/categories .
cp -r _site/tags .
cp -r _site/category .
git add tags
git add categories
git add category
git commit -m 'deploy categories and tags.'
# git reset HEAD~ # In case build error occurs, run this command.