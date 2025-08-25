import reverseString from "../scripts/reverseString";

test("hello to olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("hello world to dlrow olleh", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("hello ! ?1 to 1? ! olleh", () => {
  expect(reverseString("hello ! ?1")).toBe("1? ! olleh");
});

test("hEL1o ! ?1 to 1? ! o1LEh", () => {
  expect(reverseString("hEL1o ! ?1")).toBe("1? ! o1LEh");
});
