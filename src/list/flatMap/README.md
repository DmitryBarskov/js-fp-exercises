# List flatMap

Transform a list just as with map but the transforming function is returning
lists and the result should be flat.
The transforming function is to give only lists.
Also you shouldn't unwrap any inner lists. So if transforming function returned
something like this: [[[5]], [[4]]] and [[2], 4], then flatMap function should
return [[[5]], [[4]], [2], 4].

You should use recursion instead of loops.

_Small hint: absence of `return` statement guarantees having no loops._

```javascript
flatMap(x => list(x, x), list(1, 2, 3)); //=> list(1, 1, 2, 2, 3, 3)
flatMap(x => , list(0, 1, 2, 3, 4)); //=>
```
