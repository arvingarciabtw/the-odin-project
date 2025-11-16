import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function getUsers(req, res) {
  try {
    const { exclude } = req.query;

    let users;

    if (exclude) {
      users = await prisma.user.findMany({
        where: {
          id: { not: parseInt(exclude) },
        },
      });

      res.status(200).json(users);
    } else {
      users = await prisma.user.findMany();

      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default { getUsers };
