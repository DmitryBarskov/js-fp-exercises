import { list, nil } from "../lib";

import length from ".";

describe.skip("length", () => {
  it("returns 0 for nil", () => {
    expect(length(nil)).toBe(0);
  });

  it("returns 1 for singleton list", () => {
    expect(length(list(2))).toBe(1);
  });

  it("works with longer lists", () => {
    expect(length(list(1, 2))).toBe(2);
    expect(length(list(1, 2, 3))).toBe(3);
    expect(length(list(1, 2, 3, 4))).toBe(4);
    expect(length(list(1, 2, 3, 4, 5))).toBe(5);
  });
});
