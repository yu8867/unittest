export class RangeError extends Error {}
export class TypeError extends Error {}

function ckeckRange(value: number) {
  if (value < 0 || value > 100) {
    throw new RangeError("入力値は0~100の間で入力してください");
  }
}

function checkNumberType(value: number) {
  if (typeof value !== "number" || typeof value !== "number") {
    throw new TypeError("数値型に修正してください");
  }
}

export function add(a: number, b: number) {
  ckeckRange(a);
  ckeckRange(b);

  checkNumberType(a);
  checkNumberType(b);

  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}
