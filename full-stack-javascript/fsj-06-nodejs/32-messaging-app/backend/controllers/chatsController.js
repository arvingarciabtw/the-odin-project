import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function getChats(req, res) {
  try {
    const chats = await prisma.chat.findMany({
      where: {
        OR: [{ first_user_id: req.user.id }, { second_user_id: req.user.id }],
      },
      include: {
        first_user: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
            username: true,
          },
        },
        second_user: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
            username: true,
          },
        },
      },
    });

    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getChatById(req, res) {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const chat = await prisma.chat.findUnique({
      where: { id: parseInt(id) },
    });

    if (
      !chat ||
      (chat.first_user_id !== userId && chat.second_user_id !== userId)
    ) {
      return res.status(404).json({ msg: 'Chat not found.' });
    }

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
        OR: [
          { first_user_id: parseInt(userId) },
          { second_user_id: parseInt(userId) },
        ],
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
