# js-fp-exercises

Exercise in functional programming!

## How to

First clone or fork this repository.
Second pick up an exercise (see [index section](#index)).

Each exercise directory consists of 3 files:

- `README.md` - the description of the exercise
- `index.test.js` - this file has tests for your solution. The tests are disabled
  in the beginning, to make a test work enable it:
  ```diff
  @@ -1,6 +1,6 @@
   import uncurry from ".";

  -describe.skip("uncurry", () => {
  +describe("uncurry", () => {
     const curriedSum = (a) => (b) => a + b;

     const regularSum = uncurry(curriedSum);
  ```
- `index.js` - solution boilerplate, edit this file to make the tests pass

Use `npm test` to run the test suite
or `npm test -- src/<exercise>` to run specific exercise.

## Index

0. [uncurry](src/uncurry)
0. [curry](src/curry)
