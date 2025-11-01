const { body, validationResult, matchedData } = require('express-validator');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const validateCreateFolder = [
  body('folderName')
    .trim()
    .notEmpty()
    .withMessage('Folder name is required.')
    .custom(async (value) => {
      const folder = await prisma.folder.findFirst({
        where: {
          name: value,
        },
      });

      if (folder) {
        throw new Error('Folder already exists. Enter a unique name.');
      }

      return true;
    }),
];

const validateDeleteFolder = [
  body('deleteFolder')
    .trim()
    .notEmpty()
    .withMessage('Folder name is required.'),
];

async function getCreateFolder(_req, res) {
  res.render('./folders/create');
}

async function getDeleteFolder(req, res) {
  const folders = await prisma.folder.findMany({
    where: {
      userId: req.user.id,
    },
  });
  res.render('./folders/delete', { folders: folders });
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

const postDeleteFolder = [
  validateDeleteFolder,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('./folders/delete', {
        errors: errors.array(),
        formData: req.body,
      });
    }

    try {
      const { deleteFolder } = matchedData(req);

      await prisma.folder.delete({
        where: {
          name_userId: {
            name: deleteFolder,
            userId: req.user.id,
          },
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
  getDeleteFolder,
  postCreateFolder,
  postDeleteFolder,
};
