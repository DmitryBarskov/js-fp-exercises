# List map

Implement a function that applies a function to all elements of a list.
If you are given a multiplication by 2 function and list 1, 2, 3, then
your function should return new list 2, 4, 6.

You should use recursion instead of loops.

_Small hint: absence of `return` statement guarantees having no loops._

```javascript
map(x => x * 2, list(1, 2, 3)); //=> list(2, 4, 6)
map(x => x * 2, list()); //=> list()
```
