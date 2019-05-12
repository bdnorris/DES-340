#!/bin/sh

vuepress build

rsync -a .vuepress/dist/ msuuser@ps467697.dreamhostps.com:msuwebdesign.com/
if [ "$?" -eq "0" ]
then
  echo "\033[1;32mSuccess\033[0m"
else
  echo "\033[1;31mError while running rsync\033[0m"
fi