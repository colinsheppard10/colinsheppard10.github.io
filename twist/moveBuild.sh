#!
yarn
yarn build
cd ..
ls | grep -v twist| xargs rm -rf
mv twist/build/* .

git add *
echo \"`date`\" | xargs git commit -m
git push origin