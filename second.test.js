import { expect, it } from "vitest";
import { checkType } from "./second";

it("should be object when input will be an array", () => {
  const result = checkType([1, 2, 3, 4, 2, 2]);
  expect(result).toBe("object");
});
