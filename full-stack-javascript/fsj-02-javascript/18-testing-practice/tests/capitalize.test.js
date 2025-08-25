const capitalize = require("../scripts/capitalize.js");

test("capitalize first letter of one word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize first letter of a string", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("capitalized first character of one word remains capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("capitalized first character of a string remains capitalized", () => {
  expect(capitalize("Hello World")).toBe("Hello World");
});

test("all characters uppercased", () => {
  expect(capitalize("HELLO WORLD")).toBe("HELLO WORLD");
});

test("number as the first character", () => {
  expect(capitalize("1ello")).toBe("1ello");
});
