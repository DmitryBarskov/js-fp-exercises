import uncurry from ".";

describe.skip("uncurry", () => {
  const curriedSum = (a) => (b) => a + b;

  const regularSum = uncurry(curriedSum);

  it("returns a function", () => {
    expect(typeof regularSum).toBe("function");
  });

  describe("uncurried function", () => {
    it("takes all the arguments at once", () => {
      expect(regularSum(3, 4)).toBe(7);
    });

    it("throws an error when applying to many arguments", () => {
      expect(() => regularSum(3, 4, 5)).toThrow(Error);
    });
  });
});
