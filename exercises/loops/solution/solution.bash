#!/usr/bin/env bash

i=$1
while [[ $i -lt $2 ]]; do
  [ ! $(( $i % 2 )) -eq 0 ] || echo $i
  i=$(( $i + 1 ))
done
