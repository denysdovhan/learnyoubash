# Nice job!

You just output the folder structure, but actually you can easily create this the tree in the same way. Say welcome to `mkdir` and `touch` commands.

The `mkdir` command create an empty folder with given name. The `touch` command make an empty file with given name.

So now, when you know about these commands, we can do something like this:

```bash
mkdir -p project/{src,dest,test}/
touch project/{src,dest,test}/{index,util}.js
```

Above we use `-p` flag with `mkdir` command to make parent directories as needed.

To see the content of the folder use `ls` command.

Run `man` to get know more about `mkdir`, `touch` and `ls` command.

In the next exercise we will take a look at streams, pipes and lists.
