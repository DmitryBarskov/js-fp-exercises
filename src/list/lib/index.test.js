import { pair, list, empty, nil, head, tail, first, second } from ".";

describe("list module", () => {
  describe("pair, first, second", () => {
    const a = { a: 1 };
    const b = { b: 2 };
    const somePair = pair(a, b);

    it("creates a pair accessible by first", () => {
      expect(first(somePair)).toBe(a);
    });

    it("creates a pair accessible by second", () => {
      expect(second(somePair)).toBe(b);
    });
  });

  describe("nil, empty", () => {
    it("nil represents an empty list", () => {
      expect(empty(nil)).toBe(true);
    });
  });

  describe("list, head, tail", () => {
    const someList = list(1, 2, 3);

    it("craetes a list accessible by head and tail", () => {
      expect(head(someList)).toBe(1);
      expect(head(tail(someList))).toBe(2);
      expect(head(tail(tail(someList)))).toBe(3);
    });

    it("tail returns nil on a signleton list", () => {
      expect(tail(list(1))).toBe(nil);
    });

    it("empty list is nil", () => {
      expect(list()).toBe(nil);
    });
  });
});
