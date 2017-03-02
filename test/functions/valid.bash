#!/usr/bin/env bash

greater_even() {
  # return if it's out of range
  [[ $1 -lt $2 ]] || return

  indent="$3"
  if [[ $(( $1 % 2 )) -eq 0 ]]; then
    i=0
    for (( i = 0; i < $indent; i++ )); do
      echo -n ' '
    done
    echo $1

    # update indent only if number is even
    indent=$(( indent + 1 ))
  fi

  greater_even $(( $1 + 1 )) $2 $indent
}

main() {
  echo $FUNCNAME
  greater_even $1 $2 1
}

main $1 $2
