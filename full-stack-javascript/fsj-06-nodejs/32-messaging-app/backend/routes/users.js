import { Router } from 'express';
import usersController from '../controllers/usersController.js';

const users = Router();

users.get('/', usersController.getUsers);

export default users;
