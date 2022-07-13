import { summ } from "./someJs";

describe("func", () => {
  test("should return 6", () => {
    const result = summ(1, 5);
    expect(result).toBe(6);
  });
});
