import { list, nil } from "../lib";

import flatMap from ".";

describe.skip("flatMap", () => {
  const duplicate = (x) => list(x, x);

  it("returns nil when given nil", () => {
    expect(flatMap(duplicate, nil)).toEqual(nil);
  });

  it("flattens the resulting list", () => {
    expect(flatMap(duplicate, list(1, 2, 3))).toEqual(list(1, 1, 2, 2, 3, 3));
  });

  it("doesn't change the original list", () => {
    const someList = list(1, 2, 3);

    expect(flatMap(duplicate, someList)).not.toBe(someList);
    expect(someList).toEqual(list(1, 2, 3));
  });

  it("doesn't unwrap internal lists", () => {
    const withAdjacentNumbers = (x) => list(x, list(x - 1, x + 1));

    expect(flatMap(withAdjacentNumbers, list(3, 6, 9))).toEqual(list(3, list(2, 4), 6, list(5, 7), 9, list(8, 10)));
  });
});
