import 'dotenv/config';
import passport from 'passport';
import authController from '../controllers/authController.js';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/register', authController.postRegister);

authRouter.post('/login', authController.postLogin);

authRouter.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  },
);

export default authRouter;
