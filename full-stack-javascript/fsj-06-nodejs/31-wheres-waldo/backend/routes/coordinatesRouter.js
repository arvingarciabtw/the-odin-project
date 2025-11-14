import { Router } from 'express';

const coordinatesRouter = Router();

coordinatesRouter.post('/', (req, res) => {
  const { x, y } = req.body;

  if (x === undefined || y === undefined) {
    return res.status(400).json({ error: 'Missing x or y coordinate.' });
  }

  try {
    let isCorrect = false;
    let isCharmander = false;
    let isMinun = false;
    let isRoselia = false;

    const tolerance = 20;
    const charmanderCoords = [1120, 470];
    const minunCoords = [1075, 760];
    const roseliaCoords = [775, 775];

    if (
      x > charmanderCoords[0] - tolerance &&
      x < charmanderCoords[0] + tolerance &&
      y > charmanderCoords[1] - tolerance &&
      y < charmanderCoords[1] + tolerance
    ) {
      isCorrect = true;
      isCharmander = true;
      return res
        .status(200)
        .json({ x, y, isCorrect, isCharmander, isMinun, isRoselia });
    } else if (
      x > minunCoords[0] - tolerance &&
      x < minunCoords[0] + tolerance &&
      y > minunCoords[1] - tolerance &&
      y < minunCoords[1] + tolerance
    ) {
      isCorrect = true;
      isMinun = true;
      return res
        .status(200)
        .json({ x, y, isCorrect, isCharmander, isMinun, isRoselia });
    } else if (
      x > roseliaCoords[0] - tolerance &&
      x < roseliaCoords[0] + tolerance &&
      y > roseliaCoords[1] - tolerance &&
      y < roseliaCoords[1] + tolerance
    ) {
      isCorrect = true;
      isRoselia = true;
      return res
        .status(200)
        .json({ x, y, isCorrect, isCharmander, isMinun, isRoselia });
    } else {
      return res.status(200).json({ x, y, isCorrect });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default coordinatesRouter;
