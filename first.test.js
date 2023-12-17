import { it, expect } from "vitest";
import { sum } from "./first";

it("should return sum of an array", () => {
  const result = sum([1, 2, 3]);
  expect(result).toBe(6);
});
