import { Router } from 'express';
import passport from 'passport';
import authController from '../controllers/authController.js';

const auth = Router();

auth.post('/register', authController.postRegister);
auth.post('/login', authController.postLogin);
auth.get(
  '/logged-user',
  passport.authenticate('jwt', { session: false }),
  authController.getLoggedUser,
);

export default auth;
