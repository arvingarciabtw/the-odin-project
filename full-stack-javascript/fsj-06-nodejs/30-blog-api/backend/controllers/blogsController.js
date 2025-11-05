import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

async function getBlogs(req, res) {
  const blogs = await prisma.post.findMany();

  res.json(blogs);
}

export default { getBlogs };
