const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getIndex(req, res) {
  const folders = await prisma.folder.findMany({
    where: {
      userId: req.user.id,
    },
  });
  res.render('index', { user: req.user, folders: folders });
}

module.exports = { getIndex };
