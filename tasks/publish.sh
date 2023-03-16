#!/usr/bin/env bash

echo 'Test npm registry'
npm config get registry
npm config set registry=http://registry.npmjs.org

echo 'Please login'
npm login

echo "Publishing"
npm publish

echo "Set as Taobao image"
npm config set registry=https://registry.npm.taobao.org 

echo "Published"
exit