#!/bin/sh

if [[ $(git status --porcelain | grep .js$ | wc -l) -ne 0 ]]; then
   echo "You should commit your changes first"
   exit 1
fi

echo "run npm run test"
if npm run test
then
  exit 0
else
  echo "error: eslint failed"
  exit 1
fi