import commentsController from '../controllers/commentsController.js';
import { Router } from 'express';

const commentsRouter = Router();

commentsRouter.get('/:id', commentsController.getComments);
commentsRouter.post('/:id', commentsController.createComment);

export default commentsRouter;
