# Awesome!

Okay, you've done this!

Variables is very important part of any programming language and now you know how it works in Bash.

In this exercise you used `$PWD` variable. In addition, there is also `pwd` command which return the same as `$PWD`. So remember, when you need to get current directory name, use `pwd` command or `$PWD` variable:

```bash
pwd        #> /Users/username/learnyoubash/variables/
echo $PWD  #> /Users/username/learnyoubash/variables/
```

Here above you may notice special strings which starts from `#` sign. Do you know what it is? It's comments.

**Comments** are special statements ignored by the `shell` interpreter. They begin with a `#` symbol and continue on to the end of the line.

For example:

```bash
#!/bin/bash
# This script will print your username.
whoami
```

Use comments to explain _what_ your script does and _why_.

In the next exercise we will use positional parameters. We will learn how to handle the arguments which may be passed to your program.
