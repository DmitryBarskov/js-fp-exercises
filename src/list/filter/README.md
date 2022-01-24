# List filter

Write a function to select items of a list which matches the given predicate.
Given a predicate (function that returns `true` or `false`) select only values
that meet the criteria.
If there is a criteria of text string presence that accepts only strings with
symbols, then `filter` function should select all not empty strings from a list.
It should also persist the order:
```javascript
const stringPresent = string => string.length > 0;

filter(stringPresent, list('', 'banana', 'apple', '')) = list('banana', 'apple')
```
because `stringPresent('') = false`, `stringPresent('banana') = true`,
`stringPresent('apple') = true`, `stringPresent('') = false`.

You should use recursion instead of loops.

_Small hint: absence of `return` statement guarantees having no loops._

```javascript
filter(x => x % 2 == 0, list(1, 2, 3, 4)); //=> list(2, 4)
filter(x => x % 2 == 0, list()); //=> list()
filter(x => true, list(2, 5, 1, 3)); //=> list(2, 5, 1, 3)
```
