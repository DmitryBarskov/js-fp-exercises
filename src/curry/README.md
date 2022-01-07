# Curry

Write a function that allows to curry any other function.
To curry means to apply single parameter to the function so that you don't
need to pass it when invoking it.

```javascript
let powerOfTwo = curry(Math.pow, 2); // Apply the first argument
// So calling powerOfTwo(x) is equivalent to calling Math.pow(2, x)

powerOfTwo(3); //=> 8
powerOfTwo(10); //=> 1024
powerOfTwo(16); //=> 65536

// Also it can apply few arguments
let logger = curry(console.log, "[DEBUG]", "7 Jan:");
logger("File created.", "80 bytes written");
// prints "[DEBUG] 7 Jan: File created. 80 bytes written"
```
