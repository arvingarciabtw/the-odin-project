import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function getChats(req, res) {
  try {
    const chats = await prisma.chat.findMany();

    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getChatById(req, res) {
  const { id } = req.params;

  try {
    const chat = await prisma.chat.findUnique({
      where: { id: parseInt(id) },
    });

    res.status(200).json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getChatsByUserId(req, res) {
  const { userId } = req.params;

  try {
    const chats = await prisma.chat.findMany({
      where: {
        OR: [{ first_user_id: parseInt(userId) }, { second_user_id: parseInt(userId) }],
      },
      include: {
        first_user: true,
        second_user: true,
      },
    });

    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default { getChats, getChatById, getChatsByUserId };
