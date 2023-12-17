import { it, expect } from "vitest";
import { sum } from "./first";

it("should return sum of an array", () => {
  // arrange
  const nums = [1, 2, 3];
  // action
  const result = sum(nums);
  // assertion
  expect(result).toBe(6);
});

it("should return NaN sum of an array with wrong data type", () => {
  const result = sum([1, "2", 3]);
  expect(result).toBe("5");
});
