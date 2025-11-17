import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function getMessagesFromChatId(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const chat = await prisma.chat.findUnique({
      where: {
        id: +id,
      },
      include: {
        first_user: true,
        second_user: true,
      },
    });

    if (!chat || (chat.first_user_id !== userId && chat.second_user_id !== userId)) {
      return res.status(404).json({ msg: 'Chat not found.' });
    }

    const messages = await prisma.message.findMany({
      where: {
        chat_id: +id,
      },
      orderBy: {
        sent_at: 'asc',
      },
    });

    res.status(200).json({ messages, chat });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createMessage(req, res) {
  const { chatId, content } = req.body;
  const userId = req.user.id;

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: +chatId,
      },
    });

    if (!chat || (chat.first_user_id !== userId && chat.second_user_id !== userId)) {
      return res.status(403).json({ msg: 'You cannot post messages to this chat.' });
    }

    const message = await prisma.message.create({
      data: {
        chat_id: +chatId,
        sent_by_id: userId,
        content,
      },
    });

    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default { getMessagesFromChatId, createMessage };
