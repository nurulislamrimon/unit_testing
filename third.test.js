import { describe, expect, it } from "vitest";
import { third } from "./third";

describe("isError()", () => {
  // type check
  it("check type of", () => {
    const data = [1, 2, 3, 4, 4];
    const result = third(data);
    expect(result).toBeTypeOf("object");
  });
  // type check
  it("check length", () => {
    const data = [1, 2, 3, 4, 4];
    const result = third(data);
    expect(result).toHaveLength(5);
  });
});
