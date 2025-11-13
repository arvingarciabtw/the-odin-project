import { Router } from 'express';

const coordinatesRouter = Router();

coordinatesRouter.post('/', (req, res) => {
  const { x, y } = req.body;

  if (x === undefined || y === undefined) {
    return res.status(400).json({ error: 'Missing x or y coordinate.' });
  }

  try {
    let isCorrect = false;
    const tolerance = 20;
    const charmanderCoords = [1120, 470];
    const minunCoords = [1075, 760];
    const roseliaCoords = [775, 775];

    if (
      // matches charmanderCoords
      (x > charmanderCoords[0] - tolerance &&
        x < charmanderCoords[0] + tolerance &&
        y > charmanderCoords[1] - tolerance &&
        y < charmanderCoords[1] + tolerance) ||
      // matches minunCoords
      (x > minunCoords[0] - tolerance &&
        x < minunCoords[0] + tolerance &&
        y > minunCoords[1] - tolerance &&
        y < minunCoords[1] + tolerance) ||
      // matches roseliaCoords
      (x > roseliaCoords[0] - tolerance &&
        x < roseliaCoords[0] + tolerance &&
        y > roseliaCoords[1] - tolerance &&
        y < roseliaCoords[1] + tolerance)
    ) {
      isCorrect = true;
      res.status(200).json({ x, y });
    } else {
      res.status(400).json({ x, y });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default coordinatesRouter;
