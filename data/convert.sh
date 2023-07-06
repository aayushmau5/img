#!/bin/bash

# Bash script to downgrade images

if [ $# -ne 1 ]; then
  echo "Usage: $0 <filename>"
  exit 1
fi

filename="$1"
output_filename="${filename%.*}-downgrade.${filename##*.}"

convert "$filename" -quality 20% "$output_filename"

echo "Conversion complete. Output file: $output_filename"

ls -lha "$filename" "$output_filename"
