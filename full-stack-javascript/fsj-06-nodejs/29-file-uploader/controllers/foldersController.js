const { body, validationResult, matchedData } = require('express-validator');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// == VALIDATION AND SANITIZATION ==

const validateCreateFolder = [
  body('folderName')
    .trim()
    .notEmpty()
    .withMessage('Folder name is required.')
    .custom(async (value, { req }) => {
      const folder = await prisma.folder.findUnique({
        where: {
          name_userId: {
            name: value,
            userId: req.user.id,
          },
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

const validateUpdateFolder = [
  body('updateFolderSelect')
    .trim()
    .notEmpty()
    .withMessage('Folder name is required.'),
  body('updateFolderText')
    .trim()
    .notEmpty()
    .withMessage('Folder name is required.')
    .custom(async (value, { req }) => {
      const folder = await prisma.folder.findUnique({
        where: {
          name_userId: {
            name: value,
            userId: req.user.id,
          },
        },
      });

      if (folder) {
        throw new Error('Folder already exists. Enter a unique name.');
      }

      return true;
    }),
];

// == GET REQUESTS ==

async function getCreateFolder(_req, res) {
  res.render('./folders/create');
}

async function getUpdateFolder(req, res) {
  const folders = await prisma.folder.findMany({
    where: {
      userId: req.user.id,
    },
  });
  res.render('./folders/update', { folders: folders });
}

async function getDeleteFolder(req, res) {
  const folders = await prisma.folder.findMany({
    where: {
      userId: req.user.id,
    },
  });
  res.render('./folders/delete', { folders: folders });
}

async function getFolderId(req, res) {
  if (req.user) {
    const folders = await prisma.folder.findMany({
      where: {
        userId: req.user.id,
      },
    });

    let { id } = req.params;
    id = Number(id);

    const files = await prisma.file.findMany({
      where: {
        folderId: id,
      },
    });

    const currentFolder = await prisma.folder.findUnique({
      where: {
        id: id,
      },
    });

    return res.render('index', {
      user: req.user,
      folders: folders,
      currentFolder: currentFolder.name,
      files: files,
    });
  }
  res.render('index', { user: null, folders: [] });
}

// == POST REQUESTS ==

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

const postUpdateFolder = [
  validateUpdateFolder,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const folders = await prisma.folder.findMany({
        where: {
          userId: req.user.id,
        },
      });
      return res.status(400).render('./folders/update', {
        errors: errors.array(),
        formData: req.body,
        folders: folders,
      });
    }

    try {
      const { updateFolderSelect, updateFolderText } = matchedData(req);

      await prisma.folder.update({
        where: {
          name_userId: {
            name: updateFolderSelect,
            userId: req.user.id,
          },
        },
        data: {
          name: updateFolderText,
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
  getUpdateFolder,
  getDeleteFolder,
  getFolderId,
  postCreateFolder,
  postUpdateFolder,
  postDeleteFolder,
};
