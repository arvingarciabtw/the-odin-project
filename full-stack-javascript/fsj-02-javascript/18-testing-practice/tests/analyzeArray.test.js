import analyzeArray from "../scripts/analyzeArray";

test("[1, 8, 3, 4, 2, 6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
test("[]", () => {
  expect(analyzeArray([])).toStrictEqual("EMPTY");
});
test("[1, 2, 3, 4, 5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
test("[2, 4, 6, 8, 10]", () => {
  expect(analyzeArray([2, 4, 6, 8, 10])).toStrictEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});
test("[6, 9, 15, 3, 12]", () => {
  expect(analyzeArray([6, 9, 15, 3, 12])).toStrictEqual({
    average: 9,
    min: 3,
    max: 15,
    length: 5,
  });
});
