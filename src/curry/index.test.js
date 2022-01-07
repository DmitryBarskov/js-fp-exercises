import curry from ".";

describe.skip("curry", () => {
  const sum = (a, b) => a + b;

  const increment = curry(sum, 1);

  it("returns a function after applying an argument", () => {
    expect(typeof increment).toBe("function");
  });

  it("returns a value after applying all arguments", () => {
    expect(increment(2)).toBe(3);
  });

  it("can curry an already curried function", () => {
    const three = curry(increment, 2);
    expect(typeof three).toBe("function");
    expect(three()).toBe(3);
  });

  it("handles multiple arguments", () => {
    const sumOfFour = (a, b, c, d) => a + b + c + d;

    const curried = curry(sumOfFour, 2, 3);

    expect(typeof curried).toBe("function");
    expect(curried(5, 6)).toBe(16);
  });
});
