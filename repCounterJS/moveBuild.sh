#!
yarn
yarn build
cd ..
ls | grep -v repCounterJS| xargs rm -rf
mv repCounterJS/build/* .

git add *
echo \"`date`\" | xargs git commit -m
git push origin