import factorial from ".";

describe.skip("factorial", () => {
  it("handles zero", () => {
    expect(factorial(0)).toBe(1);
  });

  it("handles one", () => {
    expect(factorial(1)).toBe(1);
  });

  it("handles other numbers", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3_628_800);
  });
});
