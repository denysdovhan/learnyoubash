# Nice job!

You just output the folder structure, but actually you can easily create this tree in the same way. Say hello to the `mkdir` and `touch` commands.

The `mkdir` command create an empty folder with a given name. The `touch` command make an empty file with a given name.

So now, knowing about these commands, we can do something like this:

```bash
mkdir -p project/{src,dest,test}/
touch project/{src,dest,test}/{index,util}.js
```

Above we use the `-p` flag with the `mkdir` command to make parent directories as needed.

To see the content of the folder use the `ls` command.

Run `man` to get to know more about the `mkdir`, `touch` and `ls` commands.

In the next exercise we will take a look at streams, pipes and lists.
