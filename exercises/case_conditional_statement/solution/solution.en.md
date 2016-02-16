# Cool!

As you have seen, using of `case` is much more convenient when you are confronted with a couple of different cases.

In this problem you were checking extensions. But how actually we can directory or filename?

We already know about `pwd` command that return full path to current directory. However there are also other similar commands, like `basename` and `dirname`.

The `basename` command strips directory and suffix from filenames such as:

    basename path/to/file.ext  #> file

The `dirname` command strips last component from file name, like this:

    dirname /path/to/file.ext  #> path/to

Run `man basename` and `man dirname` to learn more about these cool commands.

In the next exercise you will take a look at loops in bash.
