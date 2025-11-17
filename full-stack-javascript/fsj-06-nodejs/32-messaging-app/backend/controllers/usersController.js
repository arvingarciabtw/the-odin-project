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

async function updateFirstName(req, res) {
  try {
    const { id, newFirstName } = req.body;
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        first_name: newFirstName,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.messsage });
  }
}

// update last name

// update username

// update password

export default { getUsers, updateFirstName };
