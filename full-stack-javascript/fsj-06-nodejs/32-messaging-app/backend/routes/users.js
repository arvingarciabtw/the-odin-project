import { Router } from 'express';
import usersController from '../controllers/usersController.js';

const users = Router();

users.get('/', usersController.getUsers);
users.post('/:id/first-name', usersController.updateFirstName);

export default users;
