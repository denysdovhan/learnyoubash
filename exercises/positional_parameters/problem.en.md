Now you already know how to define local and environment variables. But what are you going to use when you need to get parameters from the outside? For those purposes you may use positional parameters.

**Positional parameters** are variables allocated when a function is evaluated and they are given positionally. The following table lists positional parameter variables and other special variables and their meanings when you are inside a function.

| Parameter      | Description                                                 |
| :------------- | :---------------------------------------------------------- |
| `$0`           | Script's name.                                              |
| `$1 … $9`      | The parameter list elements from 1 to 9.                    |
| `${10} … ${N}` | The parameter list elements from 10 to N.                   |
| `$*` or `$@`   | All positional parameters except `$0`.                      |
| `$#`           | The number of parameters, not counting `$0`.                |
| `$FUNCNAME`    | The function name (has a value only inside a function).     |

In the example below, the positional parameters will be `$0='./script.sh'`,  `$1='foo'` and `$2='bar'`:

    ./script.sh foo bar

### Default values

Variables may also have _default_ values. We can define them as such using the following syntax:

```bash
# Assign FOO value 'default' if it's empty
FOO=${FOO:-'default'}
```

Default values may be useful when you should process the positional parameters, which could be omitted.

## THE CHALLENGE

Create a file named `parameters.bash`.

Your program should output only the _first_, _third_ and _fifth_ positional parameters, which will be passed into your script. Before each argument must be its sequence number with a colon `:`. Every parameter must be outputted on separate lines.

For example, if you run the script like so:

    ./parameters.bash one two three four five six seven

The output must look like the following:

    1: one
    3: three
    5: five

Do not pass any arguments to your solution; when you try to verify or run your script using `learnyoubash`, we will pass the arguments automatically.

---
