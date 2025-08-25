import { calculator } from "../scripts/calculator";

describe("addition", () => {
  test("add 1 and 2", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("add 69 and 69", () => {
    expect(calculator.add(69, 69)).toBe(138);
  });
  test("an operand is a string", () => {
    expect(calculator.add("2", 5)).toBe("ERROR");
  });
  test("an operand is null", () => {
    expect(calculator.add(6, null)).toBe("ERROR");
  });
  test("an operand is undefined", () => {
    expect(calculator.add(undefined, null)).toBe("ERROR");
  });
});

describe("subtraction", () => {
  test("subtract 1 and 2", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
  test("subtract 69 and 69", () => {
    expect(calculator.subtract(69, 69)).toBe(0);
  });
  test("an operand is a string", () => {
    expect(calculator.subtract("2", 5)).toBe("ERROR");
  });
  test("an operand is null", () => {
    expect(calculator.subtract(6, null)).toBe("ERROR");
  });
  test("an operand is undefined", () => {
    expect(calculator.subtract(undefined, null)).toBe("ERROR");
  });
});
