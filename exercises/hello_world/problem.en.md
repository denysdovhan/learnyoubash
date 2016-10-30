     _                                         _               _     
    | | ___  __ _ _ __ _ __  _   _  ___  _   _| |__   __ _ ___| |__  
    | |/ _ \/ _` | '__| '_ \| | | |/ _ \| | | | '_ \ / _` / __| '_ \
    | |  __/ (_| | |  | | | | |_| | (_) | |_| | |_) | (_| \__ \ | | |
    |_|\___|\__,_|_|  |_| |_|\__, |\___/ \__,_|_.__/ \__,_|___/_| |_|
                             |___/                                   

Welcome in **learnyoubash**!

This workshopper is completely based on the **bash-handbook**:

<https://github.com/denysdovhan/bash-handbook>


### What is Bash?

Bash is a Unix shell written by **Brian Fox** for the GNU Project as a free software replacement for the [Bourne shell](https://en.wiki
pedia.org/wiki/Bourne_shell). It was released in 1989 and has been distributed as the Linux and OS X default shell for a long time. Today, Bash is one of the most powerful and portable tools for writing efficient scripts for all Unix-based systems. So let's get started!

### Interactive and non-interactive modes

Bash may work in two different modes: interactive and non-interactive.

Just now you're interacting with this workshopper using commands, for example `learnyoubash`. This is an _interactive mode_. Here you can enter a variety of Unix commands, such as `ls`, `grep`, `cd`, `mkdir`, `rm` and see the result of their execution.

In _non-interactive mode_, the shell reads commands from a file or a pipe and executes them. The exercises in this workshopper will teach you how to write simple scripts using Bash.

### What is the script?

A script is just a regular text file that consists of commands the shell interpreter can evaluate using `bash` shell's interpreter program. The commands are just regular command which you can use from interactive mode too.

Create your first script using the `touch` command:

    touch hi.bash

The `touch` command creates an empty file in your current directory.

Now you can simplify invoking the script by making it an executable file using the `chmod` command:

    chmod +x hi.bash

Additionally, the first line in the script must indicate which program it should use to run the file, like so:

```bash
#!/usr/bin/env bash

echo "Hi!"
```

This `#!/usr/bin/env bash` character sequence is known as the [shebang](http://en.wikipedia.org/wiki/Shebang_%28Unix%29). Now you can run script like this:

    ./hi.bash

Another handy thing we learned above is using the `echo` to print something to the terminal screen.

## THE CHALLENGE

Create a file named `hello.bash` (prefer to use `touch`).

That file should contain a command which outputs:

    Hello, world!

---
