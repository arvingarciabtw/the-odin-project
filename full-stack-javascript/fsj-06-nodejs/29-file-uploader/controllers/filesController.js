const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getCreateFile(req, res) {
  const folders = await prisma.folder.findMany({
    where: {
      userId: req.user.id,
    },
  });

  res.render('./files/create', { folders: folders });
}

async function postCreateFile(req, res) {
  const { createFileFolder } = req.body;

  const folder = await prisma.folder.findUnique({
    where: {
      name_userId: {
        name: createFileFolder,
        userId: req.user.id,
      },
    },
  });

  const folderId = folder.id;

  await prisma.file.create({
    data: {
      name: req.file.filename,
      size: req.file.size,
      createdAt: new Date(),
      folderId: folderId,
    },
  });
  res.redirect('/');
}

module.exports = {
  getCreateFile,
  postCreateFile,
};
