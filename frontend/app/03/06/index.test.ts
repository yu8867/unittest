import { add } from ".";
import { RangeError, TypeError } from ".";

describe("テスト", () => {
  describe("add", () => {
    test("50 + 50 は 100", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計の条件は 100 である", () => {
      expect(add(70, 50)).toBe(100);
    });
    test("引数が数値型でない場合、例外スローする", () => {
      expect(() => add("test", "amp")).toThrow(TypeError);
      expect(() => add(10, "amp")).toThrow(TypeError);
      expect(() => add("test", 10)).toThrow(TypeError);
    });
    test("引数が 0~100 の範囲外の場合、例外スローする", () => {
      expect(() => add(120, -10)).toThrow(RangeError);
      expect(() => add(-10, 120)).toThrow(RangeError);
      expect(() => add(-10, 90)).toThrow(RangeError);
      expect(() => add(90, -10)).toThrow(RangeError);
    });
  });

  describe("booleaの検証", () => {
    test("「True」の検証", () => {
      expect(1).toBeTruthy();
      expect("1").toBeTruthy();
      expect(true).toBeTruthy();
    });
    test("「False」の検証", () => {
      expect(0).toBeFalsy();
      expect("").toBeFalsy();
      expect(false).toBeFalsy();
    });
  });

  describe("数値の検証", () => {
    const value = 2 + 2;
    test("期待と等しい", () => {
      expect(value).toBe(4);
      expect(value).toEqual(4);
    });
    test("期待値は大きい", () => {
      expect(value).toBeGreaterThan(3);
      expect(value).toBeGreaterThanOrEqual(4);
    });
    test("期待値は小さい", () => {
      expect(value).toBeLessThan(5);
      expect(value).toBeLessThanOrEqual(5);
      expect(value).toBeLessThanOrEqual(4);
    });
  });

  describe("文字列の検証", () => {
    const str = "こんにちは世界";
    test("Equal", () => {
      expect(str).toBe("こんにちは世界");
      expect(str).toEqual("こんにちは世界");
    });
    test("Contain", () => {
      expect(str).toContain("世界");
      expect(str).not.toContain("さようなら");
    });
    test("Match", () => {
      expect(str).toMatch("世界");
      expect(str).not.toMatch("さようなら");
    });
    test("Length", () => {
      expect(str).toHaveLength(7);
      expect(str).not.toHaveLength(0);
    });

    const obj = {
      status: 200,
      message: str,
    };
    test("Object Contain", () => {
      expect(obj).toEqual({
        status: 200,
        message: expect.stringContaining("世界"),
      });
      expect(obj).toEqual({
        status: 200,
        message: expect.stringMatching("世界"),
      });
    });

    const tags = ["Jest", "Story", "React"];
    test("ArraytoContain", () => {
      expect(tags).toContain("Story");
      expect(tags).toHaveLength(3);
      expect(tags).not.toHaveLength(0);
    });
    const author = { name: "tarou", age: 28 };
    test("MatchObject", () => {
      expect(author).toMatchObject({ name: "tarou", age: 28 });
      expect(author).toMatchObject({ age: 28 });
      expect(author).not.toMatchObject({ gender: "female" });
    });
    test("Property", () => {
      expect(author).toHaveProperty("name");
      expect(author).toHaveProperty("age");
      expect(author).not.toHaveProperty("gender");
    });
    const obj_2 = {
      title: "aaaa",
      author: {
        name: "tarou",
        age: 28,
      },
    };
    test("ObjContain", () => {
      expect(obj_2).toEqual({
        title: expect.stringContaining("a"),
        author: expect.objectContaining({ name: "tarou" }),
      });
    });
  });
});
