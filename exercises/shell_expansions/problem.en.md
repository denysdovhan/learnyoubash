_Expansions_  are a mechanism to calculate arithmetical operations, to save results of command's executions and so on.

If you are interested, you can read [more about shell expansions](https://www.gnu.org/software/bash/manual/bash.html#Shell-Expansions).

### Brace expansion

Brace expansions allow us to generate arbitrary strings. It's similar to _filename expansion_. For example:

```bash
echo beg{i,a,u}n # begin began begun
```

Also brace expansions may be used for creating ranges, which are iterated over in loops.

```bash
echo {0..5} # 0 1 2 3 4 5
echo {00..8..2} # 00 02 04 06 08
```

### Command substitution

Command substitution allow us to evaluate a command and substitute its value into another command or variable assignment. Command substitution is performed when a command is enclosed by ``` `` ``` or `$()`.  For example, we can use it as follows:

```bash
now=`date +%T`
# or
now=$(date +%T)

echo $now # 19:08:26
```

### Arithmetic expansion

In bash we are free to do any arithmetic operations. But the expression must be enclosed by `$(( ))`. The format for arithmetic expansions is:

```bash
result=$(( ((10 + 5*3) - 7) / 2 ))
echo $result # 9
```

## THE CHALLENGE

Create a file named `expansions.bash`.

Your script should multiply the first positional parameter with the sum of the second and third parameter using arithmetic expansion. Save the result to the variable, `$RESULT` e.g.

Then, using brace expansions, restore the following folder structure:

```
project-<RESULT>
├── dest
│   ├── index.js
│   └── util.js
├── src
│   ├── index.js
│   └── util.js
└── test
    ├── index.js
    └── util.js
```

Do not create any folders! Just output the result using `echo`. For example:

    ./expansions.bash 1 5 6

The result must looks like this:

    project-11/src/index.js project-11/src/util.js project-11/dest/index.js project-11/dest/util.js project-11/test/index.js project-11/test/util.js

---
