#!/bin/bash

cd lib
yarn build
npm publish --dry-run
cd ../website
yarn build
