const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getIndex(req, res) {
  if (req.user) {
    const folders = await prisma.folder.findMany({
      where: {
        userId: req.user.id,
      },
    });
    return res.render('index', { user: req.user, folders: folders });
  }
  res.render('index', { user: null, folders: [] });
}

module.exports = { getIndex };
