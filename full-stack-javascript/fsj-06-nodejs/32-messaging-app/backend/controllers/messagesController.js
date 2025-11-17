import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function getMessagesFromChatId(req, res) {
  try {
    const { id } = req.params;

    const [messages, chat] = await Promise.all([
      prisma.message.findMany({
        where: {
          chat_id: +id,
        },
        orderBy: {
          sent_at: 'asc',
        },
      }),
      prisma.chat.findUnique({
        where: {
          id: +id,
        },
        include: {
          first_user: true,
          second_user: true,
        },
      }),
    ]);

    res.status(200).json({ messages, chat });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createMessage(req, res) {
  const { chatId, sentById, content } = req.body;

  try {
    const message = await prisma.message.create({
      data: {
        chat_id: +chatId,
        sent_by_id: sentById,
        content,
      },
    });

    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default { getMessagesFromChatId, createMessage };
