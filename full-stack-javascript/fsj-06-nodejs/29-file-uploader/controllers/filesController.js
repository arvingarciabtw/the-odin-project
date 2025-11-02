const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const path = require('node:path');

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

async function postDownloadFile(req, res) {
  let { id } = req.params;
  id = Number(id);

  const file = await prisma.file.findUnique({
    where: {
      id: id,
    },
  });

  const filename = file.name;
  const filepath = path.join(__dirname, '../uploads', filename);

  res.download(filepath, (err) => {
    if (err) {
      console.error('Download error:', err);
      res.status(404).send('File not found');
    }
  });
}

module.exports = {
  getCreateFile,
  postCreateFile,
  postDownloadFile,
};
