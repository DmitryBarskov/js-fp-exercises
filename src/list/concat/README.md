# List concat

Write a function that concatenates two lists into single list. In other words
the function should create another list containing items from both lists,
the order should be the same and items from the second list should follow
the items from the first one.

You should use recursion instead of loops.

_Small hint: absence of `return` statement guarantees having no loops._

```javascript
concat(list(1, 2, 3), list()); //=> list(1, 2, 3)
concat(list(), list()); //=> list()
concat(list(2, 5), list(1, 3, 4)); //=> list(2, 5, 1, 3, 4)
```
