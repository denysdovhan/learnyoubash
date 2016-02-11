# Fine!

You may use functions to create your own commands in terminal. To do that, just define functions somewhere in your `~/.bashrc` file (`~/.bash_profile`, `~/.zshrc` for Zsh, etc). For example:

```bash
# ...
# other ~/.bashrc settings
# ...

# Make directory and jump inside
md() {
  mkdir -p $1 && cd $1
}
```

After that, update your settings using `. ~/.bashrc` and use this command as any other:

    ~ $ md Projects
    ~/Projects $

## Aliases

By the way, sometimes you should type a long command sequence and to do something. If you often do this, you may want define an _alias_. Alias is essentially like a keyboard shortcut, a means of avoiding typing a long command sequence.

For example, if you often type a `ls -alF` command feel free to define alias in the `~/.bashrc` file:

```bash
# ...
# other ~/.bashrc settings
# ...

alias ll='ls -alF'
```

Update your settings using `. ~/.bashrc` and now you can use `ll` command instead of long `ls -alF`.

Now you have a good basic knowledge in Bash. In the next exercise we will take a look at debugging of bash scripts.
