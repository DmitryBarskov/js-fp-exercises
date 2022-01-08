# Uncurry

Write a function that allows to uncurry a curried function.
To uncurry means to make a function that takes an argument and returns another
function and so on to take all the arguments and return the final result.
I. e. convert the function from kind `f = (a) => (b) => (c) => { ... }` to
`f = (a, b, c) => { ... }`.

```javascript
const sumOfThree = (a) => (b) => (c) => a + b + c;

sumOfThree(3)(4)(5); //=> 12

const sumOfThree1 = uncurry(sumOfThree);

sumOfThree1(3, 4, 5); //=> 12
```
