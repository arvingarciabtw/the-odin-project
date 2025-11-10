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

async function createBlog(req, res) {
  const { title, content, userId } = req.body;

  const blog = await prisma.post.create({
    data: {
      userId,
      title,
      content,
      postedAt: new Date(),
      isPublished: true,
    },
  });

  res.json(blog);
}

async function toggleIsPublished(req, res) {
  const { id } = req.params;

  const postToUpdate = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  let updatedPost;

  if (postToUpdate.isPublished) {
    updatedPost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        isPublished: false,
      },
    });
  } else {
    updatedPost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        isPublished: true,
      },
    });
  }

  res.json(updatedPost);
}

export default { getBlogs, getBlogById, createBlog, toggleIsPublished };
