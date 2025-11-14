import { Router } from 'express';
import { PrismaClient } from '../generated/prisma/client.js';

const usersRouter = Router();

const prisma = new PrismaClient();

usersRouter.get('/', async (req, res) => {
  try {
    const { sorted, limit } = req.query;

    let users;

    if (sorted === 'true') {
      const allUsers = await prisma.user.findMany({
        orderBy: {
          time: 'asc',
        },
      });

      let currentRank = 1;
      let previousTime = null;

      users = allUsers.map((user) => {
        if (user.time !== previousTime) {
          previousTime = user.time;
          if (allUsers.indexOf(user) !== 0) {
            currentRank++;
          }
        }
        return {
          ...user,
          rank: currentRank,
        };
      });

      if (limit) {
        users = users.slice(0, parseInt(limit));
      }
    } else {
      users = await prisma.user.findMany();
    }

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

usersRouter.post('/', async (req, res) => {
  const { name, time } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        time: time,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default usersRouter;
