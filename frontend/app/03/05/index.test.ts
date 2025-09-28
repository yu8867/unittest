import { add } from ".";

describe("add", () => {
  test("50 + 50 は 100", () => {
    expect(add(50, 50)).toBe(100);
  });
  test("合計の条件は 100 である", () => {
    expect(add(70, 50)).toBe(100);
  });
  test("引数が数値型でない場合、例外スローする", () => {
    expect(() => add("test", "amp")).toThrow("数値型に修正してください");
  });
  test("引数が 0~100の範囲外の場合、例外スローする", () => {
    expect(() => add(120, -10)).toThrow("入力値は0~100の間で入力してください");
  });
});
