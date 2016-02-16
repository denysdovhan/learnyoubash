#!/usr/bin/env bash

R=$(( ($3 + $2) * $1))
echo project-$R/{src,dest,test}/{index,util}.js
