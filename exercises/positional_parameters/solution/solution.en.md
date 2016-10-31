# Congrats!

Positional parameters will be very useful for building your own command line applications.

For example, we have the script:

```bash
#!/usr/bin/env bash

echo "Arguments:"
echo $*
```

Run it with some flags:

    ./script.bash --test -t -a -b -c

It will print:

    Arguments:
    --test -t -a -b -c

That means we can handle these flags and change what the script will return. Exactly the same as with the `--help` flag, which outputs a help message instead of running the program.

In the next exercise we will learn what arrays are in Bash.
