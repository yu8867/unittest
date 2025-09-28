import { wait } from ".";

describe("promise", () => {
  test("経過時間", () => {
    return expect(wait(50)).resolves.toBe(50);
  });

  test("async await", async () => {
    expect(await wait(60)).toBe(60);
  });

  test("reject", async () => {
    expect.assertions(1);
    try {
      await wait(50);
    } catch (err) {
      expect(err).toBe(50);
    }
  });
});
