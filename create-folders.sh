#!/usr/bin/env bash

year=2021

for i in {01..25}
do
    folder=$(printf "%02d" $i)
    mkdir ./$folder &> /dev/null

    echo "# $folder" > ./$folder/README.md
    echo "" >> ./$folder/README.md
    echo ":arrow_right: https://adventofcode.com/$year/day/$i" >> ./$folder/README.md
    echo "" >> ./$folder/README.md

    echo "🎅🎄☃️  Prepared $i"
done
