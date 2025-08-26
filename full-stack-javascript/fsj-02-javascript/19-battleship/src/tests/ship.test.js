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
