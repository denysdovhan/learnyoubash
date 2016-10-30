# Great!

Streams and pipes are useful to create logs and to transfer data from one command to another. Lists of commands give you the opportunity to change the result of the execution of your script.

You are already familiar with the `ls` command. But what if you need to list all files with a specific extension in the current directory?

Meet the `grep` command! The `grep` command prints lines matching a pattern. Now, using `grep` we can solve the problem like so:

    ls | grep .md$

The pipeline above will print only files with `.md` extension.

Learn more about `grep` using `man grep`.

In the next exercise you will learn how to use `if` conditional statements.
