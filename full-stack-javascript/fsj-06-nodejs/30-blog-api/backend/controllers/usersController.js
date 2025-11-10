import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

async function getUsers(req, res) {
  const users = await prisma.user.findMany();

  res.json(users);
}

async function getUserById(req, res) {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(user);
}

export default { getUsers, getUserById };
