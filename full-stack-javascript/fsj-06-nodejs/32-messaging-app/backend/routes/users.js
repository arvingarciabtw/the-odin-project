import { Router } from 'express';
import usersController from '../controllers/usersController.js';

const users = Router();

users.get('/', usersController.getUsers);
users.post('/:id/first-name', usersController.updateFirstName);
users.post('/:id/last-name', usersController.updateLastName);
users.post('/:id/username', usersController.updateUsername);
users.post('/:id/password', usersController.updatePassword);

export default users;
