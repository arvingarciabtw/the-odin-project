import { Router } from 'express';

const coordinatesRouter = Router();

coordinatesRouter.post('/', (req, res) => {
  const { x, y } = req.body;

  if (x === undefined || y === undefined) {
    return res.status(400).json({ error: 'Missing x or y coordinate.' });
  }

  try {
    res.status(200).json({ x, y });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default coordinatesRouter;
