
This exercise is very important because streams, pipes, and lists of commands are used everywhere. You will meet these strange `>` and `|` characters in almost any script. So let's discover the secret to what they exactly are.


### Streams

Bash receives input and sends output as sequences or **streams** of characters. These streams may be redirected into files or vice versa.

There are three descriptors:

| Code | Descriptor | Description          |
| :--: | :--------: | :------------------- |
| `0`  | `stdin`    | The standard input.  |
| `1`  | `stdout`   | The standard output. |
| `2`  | `stderr`   | The errors output.   |

Redirection makes it possible to control where the output of a command goes to, and where the input of a command comes from. For redirecting streams these operators are used:

| Operator | Description                                  |
| :------: | :------------------------------------------- |
| `>`      | Redirecting output                           |
| `&>`     | Redirecting output and error output          |
| `&>>`    | Appending redirected output and error output |
| `<`      | Redirecting input                            |
| `<<`     | [Here documents](http://tldp.org/LDP/abs/html/here-docs.html) syntax |
| `<<<`    | [Here strings](http://www.tldp.org/LDP/abs/html/x17837.html) |

Here are a few examples of using redirections:

```bash
# output of ls will be written to list.txt
ls -l > list.txt

# append output to list.txt
ls -a >> list.txt

# all errors will be written to errors.txt
grep da * 2> errors.txt

# read from errors.txt
less < errors.txt
```

### Pipes

We could redirect standard streams not only in files, but also to other programs. **Pipes** let us use the output of a program as the input of another.

In the example below, `command1` sends its output to `command2`, which then passes it on to the input of `command3`:

    command1 | command2 | command3

Constructions like this are called **pipelines**.

In practice, this can be used to process data through several programs. For example, here the output of `ls -l` is sent to the `grep` program, which  prints only files with a `.md` extension, and this output is finally sent to the `less` program:

    ls -l | grep .md$ | less

### Lists of commands

A **list of commands** is a sequence of one or more pipelines separated by `;`, `&`, `&&` or `||` operator.

If a command is terminated by the control operator `&`, the shell executes the command asynchronously in a subshell. In other words, this command will be executing in the background.

Commands separated by a `;` are executed sequentially: one after another. The shell waits for the finish of each command.

```bash
# command2 will be executed after command1
command1 ; command2

# which is the same as
command1
command2
```

Lists separated by `&&` and `||` are called _AND_ and _OR_ lists, respectively.

The _AND-list_ looks like this:

```bash
# command2 will be executed if, and only if, command1 finishes successfully (returns 0 exit status)
command1 && command2
```

The _OR-list_ has the form:

```bash
# command2 will be executed if, and only if, command finishes unsuccessfully (returns code of error)
command1 || command2
```

The return code of _AND_ and _OR_ lists the exit status of the last executed command.

## THE CHALLENGE

Create a file named `lists.bash`.

Using lists of commands (`&`, `&&`, `||` or `;`) output `First parameter is false.` if the first positional parameter is `false`, the path to the current directory if the second parameter is `true`; if third parameter is `true` output the list of files in the current directory or `Third parameter is false.` if it is `false`.

For example:

    ./lists.bash true true false

Output:

    ~/Projects/bash-exercices.
    Third parameter is false.

---
