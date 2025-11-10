import { Router } from 'express';
import usersController from '../controllers/usersController.js';

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:id', usersController.getUserById);

export default usersRouter;
