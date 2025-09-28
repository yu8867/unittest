import { add, sub } from ".";

describe("add", () => {
  test("50 + 50 は 100", () => {
    expect(add(50, 50)).toBe(100);
  });
  test("合計の条件は 100 である", () => {
    expect(add(70, 50)).toBe(100);
  });
});

describe("sub", () => {
  test("50 + 50 は 100", () => {
    expect(sub(60, 50)).toBe(10);
  });
  test("合計の下限条件は 0 である", () => {
    expect(sub(50, 100)).toBe(0);
  });
});
