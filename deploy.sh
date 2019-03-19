#!/bin/bash
prjname="volla-landingpage"

echo "=============================="
echo ${prjname}
echo "=============================="

npm run dev

# build
npm run build

# deploy with firebase cli
firebase deploy

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg

# commit
git add .
git commit -m "$commitmsg"
git push

exit
