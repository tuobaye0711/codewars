Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return `true` if the string is valid, and `false` if it's invalid.

## Examples

```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

```

## Constraints

`0 <= input.length <= 100`

You may assume that the input string will _only_ contain opening and closing parenthesis and _will not_ be an empty string.

[solution](../solution/Valid\%20Parentheses.js)