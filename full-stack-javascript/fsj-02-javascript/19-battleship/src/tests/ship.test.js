import { Ship } from "../scripts/modules/classes";

describe("hit()", () => {
  const ship1 = new Ship(5, 0);
  const ship2 = new Ship(4);
  test("hit once", () => {
    ship1.hit();
    expect(ship1.hitCount).toBe(1);
  });
  test("hit twice", () => {
    ship1.hit();
    expect(ship1.hitCount).toBe(2);
  });
  test("hit a diff ship once", () => {
    ship2.hit();
    expect(ship2.hitCount).toBe(1);
  });
  test("hit a diff ship three more times", () => {
    ship2.hit();
    ship2.hit();
    ship2.hit();
    expect(ship2.hitCount).toBe(4);
  });
  test("should not be able to hit a sunken ship", () => {
    ship2.hit();
    expect(ship2.hitCount).toBe(4);
  });
});

describe("isSunk()", () => {
  const ship1 = new Ship(5, 4);
  test("not sunken", () => {
    expect(ship1.isSunken).toBe(false);
  });
  test("should sink after it gets hit and it matches the length", () => {
    ship1.hit();
    expect(ship1.isSunken).toBe(true);
  });
  test("should still be sank and hit count should still be the same as length", () => {
    ship1.hit();
    expect(ship1.isSunken).toBe(true);
    expect(ship1.hitCount).toBe(5);
  });
});
