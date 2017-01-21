Like in most programming languages, you can also create variables in bash.

Bash knows no data types. Variables can contain only numbers or a string of one or more characters. There are three kinds of variables you can create: local variables, environment variables and variables as _positional arguments_.

### Local variables

**Local variables** are variables that exist only within a single script. They are inaccessible to other programs and scripts. A local variable can be declared using `=` sign (as a rule, there **should not** be any spaces between a variable's name, `=` and its value) and its value can be retrieved using the `$` sign. For example:

```bash
foo="value"  # declare variable
echo $foo    # display value
unset foo    # delete variable
```

The variables can be used inside strings. But there is an important difference between double and single quotes. Inside double quotes variables are expanded. Inside single quotes they are not. For example:

```bash
NAME="Denys"
echo "My name is $NAME" #> My name is Denys
echo 'My name is $NAME' #> My name is $NAME
```

### Environment variables

Sometimes we need to declare variables which will be accessible from outside the current shell session, for other programs, scripts, etc. These variables are called **environment variables**. They are created just like local variables, but using the keyword `export` instead.


```bash
export GLOBAL_VAR="I am a global variable"
```

There are _a lot_ of global variables in bash. You will meet these variables fairly often, so here is a quick lookup table with the most practical ones:

| Variable     | Description                                                   |
| :----------- | :------------------------------------------------------------ |
| `$HOME`      | The current user's home directory.                            |
| `$USER`      | The current user.                                             |
| `$PATH`      | A colon-separated list of directories in which the shell looks for commands. |
| `$PWD`       | The current working directory.                                |
| `$RANDOM`    | Random integer between 0 and 32767.                           |
| `$UID`       | The numeric, real user ID of the current user.                |
| `$PS1`       | The primary prompt string.                                    |
| `$PS2`       | The secondary prompt string.                                  |

You may find extended list of environment variables in Bash:

<http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html#sect_03_02_04>

## THE CHALLENGE

Create a file named `variables.bash` (of course using `touch`).

Your program should output your current username and directory name in the following format:

    User <username> in directory <directory>.

---
