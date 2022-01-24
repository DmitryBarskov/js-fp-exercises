import { list, nil } from "../lib";

import concat from ".";

describe.skip("concat", () => {
  it("returns list unchanged when given a nil", () => {
    expect(concat(nil, nil)).toEqual(nil);
    expect(concat(list(1), nil)).toEqual(list(1));
    expect(concat(nil, list(1))).toEqual(list(1));
  });

  it("works with not empty lists", () => {
    expect(concat(list(4, 5, 6), list(1, 2, 3))).toEqual(list(4, 5, 6, 1, 2, 3));
  });
});
