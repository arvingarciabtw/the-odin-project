function randomizeShips(gameboard, ships) {
  gameboard.ships = [];
  gameboard.hitAttacks = [];
  gameboard.missedAttacks = [];

  const shipLengths = ships.map((ship) => ship.length);
  const orientations = ["alongX", "alongY"];

  shipLengths.forEach((length) => {
    let placed = false;
    let attempts = 0;
    const maxAttempts = 100;

    while (!placed && attempts < maxAttempts) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const orientation = orientations[Math.floor(Math.random() * 2)];

      const ship = ships.find((s) => s.length === length && !s.placed);

      if (ship) {
        const coordinates = gameboard.placeShip(ship, x, y, orientation);

        if (coordinates.length > 0) {
          ship.placed = true;
          placed = true;
        }
      }

      attempts++;
    }
  });

  ships.forEach((ship) => {
    ship.placed = false;
  });
}

export { randomizeShips };
