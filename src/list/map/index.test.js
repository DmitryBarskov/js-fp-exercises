import { list, nil } from "../lib";

import map from ".";

describe("map", () => {
  const increment = (x) => x + 1;

  it("returns nil when given nil", () => {
    expect(map(increment, nil)).toEqual(nil);
  });

  it("applies given function to every item of the list", () => {
    expect(map(increment, list(1, 2, 3))).toEqual(list(2, 3, 4));
  });

  it("doesn't change the original list", () => {
    const someList = list(1, 2, 3);

    expect(map(increment, someList)).not.toBe(someList);
    expect(someList).toEqual(list(1, 2, 3));
  });
});
