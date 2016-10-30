# Neat!

You have made a simple script that greets us depending on the current time. But how can we get the current time?

For those purposes we can use the `date` command that prints or sets the system date and time. So using this command we might solve this problem like this:

```bash
# Get current hour
HOUR=$(date +%H)

if [[ $HOUR -lt 12 ]]; then
  echo "Good morning!"
elif [[ $HOUR -ge 12 && $HOUR -lt 18 ]]; then
  echo "Good afternoon!"
else
  echo "Good evening!"
fi
```

The `+%H` means that we want to output only the current hour in 00..23 format. Use `man date` to find out more about the `date` command.

In the next exercise you will master `case` conditional statements.
