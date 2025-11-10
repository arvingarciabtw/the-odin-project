import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

async function getComments(req, res) {
  const { id } = req.params;

  const comments = await prisma.comment.findMany({
    where: {
      postId: Number(id),
    },
  });

  res.json(comments);
}

async function createComment(req, res) {
  const { id } = req.params;
  const { commentText, userId } = req.body;

  const comment = await prisma.comment.create({
    data: {
      userId: userId,
      postId: Number(id),
      commentText,
      commentedAt: new Date(),
    },
  });

  res.json(comment);
}

async function deleteComment(req, res) {
  const { id } = req.params;

  await prisma.comment.delete({
    where: { id: Number(id) },
  });

  const comments = await prisma.comment.findMany();

  res.send({
    message: 'Comment deleted!',
    comments: comments,
  });
}

export default { getComments, createComment, deleteComment };
