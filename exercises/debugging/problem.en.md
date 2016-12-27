Okay, now you know how to write Bash scripts. But it's not so easy. Sometimes we have troubles and Bash gives us tools for debugging scripts. If we want to run a script in debug mode, we use a special option in our script's shebang:

```bash
#!/bin/bash options
```

These options are settings that change the shell's behavior. The following table is a list of options which might be useful to you:

| Flag | Name        | Description                                             |
| :--: | :---------- | :------------------------------------------------------ |
| `-f` | noglob      | Disable filename expansion (globbing).                  |
| `-i` | interactive | Script runs in _interactive_ mode.                      |
| `-n` | noexec      | Read command, but don't execute them (syntax check).    |
| `-t` | —           | Exit after first command.                               |
| `-v` | verbose     | Print each command to `stdout` before executing it.     |
| `-x` | xtrace      | Print each command to `stdout` before executing it and expands commands. |

For example, we have a script with `-x` option such as:

```bash
#!/bin/bash -x

for (( i = 0; i < 3; i++ )); do
  echo $i
done
```

This will print the value of the variables to `stdout` along with other useful information:

```
$ ./my_script
+ (( i = 0 ))
+ (( i < 3 ))
+ echo 0
0
+ (( i++  ))
+ (( i < 3 ))
+ echo 1
1
+ (( i++  ))
+ (( i < 3 ))
+ echo 2
2
+ (( i++  ))
+ (( i < 3 ))
```

Sometimes we need to debug a part of a script. In this case using the `set` command is convenient. This command can enable and disable options. Options are turned on using `-` and turned off using `+`:

```bash
#!/bin/bash

echo "xtrace is turned off"
set -x
echo "xtrace is enabled"
set +x
echo "xtrace is turned off again"
```

## THE CHALLENGE

Create a file named `debugging.bash`.

You will receive positional parameters. These positional parameters are filenames in the format `file[hash]` (for example `file177`, `file352`). Your script should do the following things:

1. Enable **verbose** and **noexec** options using `set`
2. Output all received parameters using `echo`
3. Create all these files
4. Create a directory with name `folder` in current directory
5. Move all files to the `folder`
6. Change directory to the `folder`
7. List all files inside the `folder`
8. Disable **verbose** and **noexec** options using `set`

Please, write one command per line without empty lines.

You must know how to move one or more files or directories from one place to another. When we need to move files we use the `mv` command. The `mv` command receives two arguments: the source and the destination. If both filenames are on the same filesystem, this results in a simple file rename. When a filename is moved to an existing filename, the existing file is deleted.

For example:

    mv old new           # renames 'old' to 'new'.
    mv file subdir/file  # moves 'file' to 'subdir/file'
    mv name* subdir/     # moves all matched to 'name*' files to the 'subdir'

Also, there is the `cp` command that copies one or more files or directories. The usage of `cp` is the same as the `mv` command.

---
