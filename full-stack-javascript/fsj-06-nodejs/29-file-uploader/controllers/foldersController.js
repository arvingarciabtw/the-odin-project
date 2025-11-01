const { body, validationResult, matchedData } = require('express-validator');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const validateCreateFolder = [
  body('folderName').trim().notEmpty().withMessage('Folder name is required.'),
];

async function getCreateFolder(_req, res) {
  res.render('./folders/create');
}

const postCreateFolder = [
  validateCreateFolder,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('./folders/create', {
        errors: errors.array(),
        formData: req.body,
      });
    }

    try {
      const { folderName } = matchedData(req);

      await prisma.folder.create({
        data: {
          name: folderName,
          userId: req.user.id,
        },
      });

      res.redirect('/');
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
];

module.exports = {
  getCreateFolder,
  postCreateFolder,
};
