#!/usr/bin/env bash

$1 || echo "First parameter is false."

$2 && echo "Second parameter is true."

$3 && echo "Third parameter is true." || echo "Third parameter is false."
