import { add, sub } from ".";

describe("四則演算", () => {
  describe("add", () => {
    test("add: 1 + 1 は 2", () => {
      expect(add(1, 1)).toBe(2);
    });
    test("add: 1 + 2 は 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  describe("sub", () => {
    test("sub: 2 - 1 は 1", () => {
      expect(sub(2, 1)).toBe(1);
    });
    test("add: 3 - 1 は 2", () => {
      expect(sub(3, 1)).toBe(2);
    });
  });
});
