If you are confronted with a couple of different possible actions to take, then using a `case` statement may be more useful than nested `if` statements. For more complex conditions use `case` like below:

```bash
case "$FRUIT" in
  (apple)
    echo 'Mmmmh... I like apple!'
    ;;
  (banana)
    echo 'Hm, a bit awry, no?'
    ;;
  (orange|tangerine)
    echo "I don't like it!" && exit 1
  ;;
  (*)
    echo "Unknown fruit - sure it isn't toxic?"
  ;;
esac
```

Each case is an expression matching a pattern. The `|` sign is used for separating multiple patterns, and the `)` operator terminates a pattern list. The commands for the first match are executed. `*` is the pattern for anything else that doesn't match the defined patterns. Each block of commands should be divided with `;;` operator.

## THE CHALLENGE

Create a file named `case.bash`.

In this exercise you will create small image extensions checker. Using `case` statement, check if the first positional parameter is an `jpeg` (or `jpg`), `png`, `gif` extension. Output `It is jpeg.`, `It is png.`, `It is gif.` accordingly. Take care about cases when positional argument contains any other extension (print `[EXT] is not an image!` in this cases).

For example:

    ./case.bash png
    ./case.bash js
    ./case.bash jpg

Output:

    It is png.
    js is not an image!
    It is jpeg.

---
