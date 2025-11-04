import 'dotenv/config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Router } from 'express';
import { PrismaClient } from '../generated/prisma/client.js';

const authRouter = Router();
const prisma = new PrismaClient();

authRouter.post('/register', async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  try {
    let user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        password: hashedPassword,
      },
    });

    res.json({ msg: 'User created successfully.' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error.', error: err.message });
  }
});

authRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' });

    const payload = { id: user.id, username: user.username };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw new Error(err);
        res.json({ token });
      },
    );
  } catch (err) {
    res.status(500).json({ msg: 'Server error.' });
  }
});

authRouter.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  },
);

export default authRouter;
