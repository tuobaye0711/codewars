Your task is to write regular expression that validates gregorian date in format "DD.MM.YYYY"

Correct date examples:

```
"23.12.2008"
"01.08.1994"
```

Incorrect examples:

```
"12.23.2008"
"01-Aug-1994"
" 01.08.1994"
```

Notes:

*   maximum length of validator is 400 characters to avoid hardcoding. (shortest solution to date is 170 characters)
*   validator should process leap days (February, 29) correctly.
*   the date is Gregorian, it's important to determine if year is leap: [https://en.wikipedia.org/wiki/Gregorian_calendar](https://en.wikipedia.org/wiki/Gregorian_calendar)