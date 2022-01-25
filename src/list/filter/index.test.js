import { list, nil } from "../lib";

import filter from ".";

describe.skip("filter", () => {
  const even = (x) => x % 2 === 0;

  it("returns nil when given nil", () => {
    expect(filter(even, nil)).toEqual(nil);
  });

  it("applies given predicate to every item of the list", () => {
    expect(filter(even, list(1, 2, 3, 4))).toEqual(list(2, 4));
  });

  it("doesn't change the original list", () => {
    const someList = list(1, 2, 3);

    expect(filter(even, someList)).not.toBe(someList);
    expect(someList).toEqual(list(1, 2, 3));
  });
});
