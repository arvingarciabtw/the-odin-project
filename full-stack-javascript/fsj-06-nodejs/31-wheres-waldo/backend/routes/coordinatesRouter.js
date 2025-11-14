import { Router } from 'express';
import coordinatesController from '../controllers/coordinatesController.js';

const coordinatesRouter = Router();

coordinatesRouter.post('/', coordinatesController.createCoordinates);

export default coordinatesRouter;
