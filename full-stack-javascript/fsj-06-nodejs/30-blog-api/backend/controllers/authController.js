import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function postRegister(req, res) {
  const { firstName, lastName, username, password } = req.body;

  try {
    let user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (user) return res.status(400).json({ msg: 'Username already exists.' });

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
}

async function postLogin(req, res) {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) return res.status(400).json({ msg: 'User not found.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid password.' });

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
    res.status(500).json({ msg: 'Server error.', error: err.message });
  }
}

async function getLoggedUser(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
      },
    });

    if (!user) return res.status(404).json({ msg: 'User not found.' });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error.', error: err.message });
  }
}

export default {
  postRegister,
  postLogin,
  getLoggedUser,
};
