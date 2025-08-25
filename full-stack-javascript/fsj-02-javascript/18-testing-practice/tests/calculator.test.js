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

describe("multiplication", () => {
  test("multiply 1 and 2", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
  test("multiply 69 and 69", () => {
    expect(calculator.multiply(69, 69)).toBe(4761);
  });
  test("multiply with one operand being 0", () => {
    expect(calculator.multiply(0, 69)).toBe(0);
  });
  test("multiply a negative number", () => {
    expect(calculator.multiply(-4, 5)).toBe(-20);
  });
  test("multiply two negative numbers", () => {
    expect(calculator.multiply(-4, -5)).toBe(20);
  });
  test("an operand is a string", () => {
    expect(calculator.multiply("2", 5)).toBe("ERROR");
  });
  test("an operand is null", () => {
    expect(calculator.multiply(6, null)).toBe("ERROR");
  });
  test("an operand is undefined", () => {
    expect(calculator.multiply(undefined, null)).toBe("ERROR");
  });
});

describe("division", () => {
  test("divide 10 by 2", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
  test("divide 69 and 69", () => {
    expect(calculator.divide(69, 69)).toBe(1);
  });
  test("divide with first operand being 0", () => {
    expect(calculator.divide(0, 69)).toBe(0);
  });
  test("divide with second operand being 0", () => {
    expect(calculator.divide(69, 0)).toBe("ERROR");
  });
  test("divide a negative number", () => {
    expect(calculator.divide(-10, 5)).toBe(-2);
  });
  test("divide two negative numbers", () => {
    expect(calculator.divide(-10, -5)).toBe(2);
  });
  test("an operand is a string", () => {
    expect(calculator.divide("2", 5)).toBe("ERROR");
  });
  test("an operand is null", () => {
    expect(calculator.divide(6, null)).toBe("ERROR");
  });
  test("an operand is undefined", () => {
    expect(calculator.divide(undefined, null)).toBe("ERROR");
  });
});
