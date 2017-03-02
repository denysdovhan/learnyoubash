#!/usr/bin/env bash

epithets=(I am "${@:2:2}" and "${@:4:1}")

echo "${epithets[*]}"
