import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function getBlogs(req, res) {
  const blogs = await prisma.post.findMany();

  res.json(blogs);
}

async function getBlogById(req, res) {
  const { id } = req.params;

  const blog = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(blog);
}

export default { getBlogs, getBlogById };
