const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getIndex(req, res) {
  if (req.user) {
    const folders = await prisma.folder.findMany({
      where: {
        userId: req.user.id,
      },
    });

    const rootFolder = await prisma.folder.findUnique({
      where: {
        name_userId: {
          name: 'root',
          userId: req.user.id,
        },
      },
    });

    const rootFolderId = rootFolder.id;

    const files = await prisma.file.findMany({
      where: {
        folderId: rootFolderId,
      },
    });

    return res.render('index', {
      user: req.user,
      folders: folders,
      currentFolder: 'root',
      files: files,
    });
  }
  res.render('index', { user: null, folders: [] });
}

module.exports = { getIndex };
