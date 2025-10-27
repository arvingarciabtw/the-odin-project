const { body, validationResult, matchedData } = require('express-validator');
const db = require('../models/queries');

// == VALIDATION AND SANITIZATION ==

const validateCreatePlatform = [
  body('createPlatform')
    .trim()
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage('The field must only have letters and numbers.')
    .notEmpty()
    .withMessage('The field must not be empty.'),
];

const validateUpdatePlatform = [
  body('updatePlatformSelect')
    .trim()
    .notEmpty()
    .withMessage('The field must not be empty.'),
  body('updatePlatformText')
    .trim()
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage('The field must only have letters and numbers.')
    .notEmpty()
    .withMessage('The field must not be empty.'),
];

const validateDeletePlatform = [
  body('deletePlatform')
    .trim()
    .notEmpty()
    .withMessage('The field must not be empty.'),
];

// == GET REQUESTS ==

async function createPlatformGet(_req, res) {
  res.render('./platforms/create');
}

async function updatePlatformGet(_req, res) {
  const platforms = await db.getAllPlatforms();

  res.render('./platforms/update', { platforms: platforms });
}

async function deletePlatformGet(_req, res) {
  const platforms = await db.getAllPlatforms();

  res.render('./platforms/delete', { platforms: platforms });
}

// == POST REQUESTS ==

const createPlatformPost = [
  validateCreatePlatform,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('./platforms/create', {
        errors: errors.array(),
      });
    }

    const { createPlatform } = matchedData(req);
    await db.createPlatform(createPlatform);
    res.redirect('/');
  },
];

const updatePlatformPost = [
  validateUpdatePlatform,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const platforms = await db.getAllPlatforms();
      return res.status(400).render('./platforms/update', {
        platforms: platforms,
        errors: errors.array(),
      });
    }

    const { updatePlatformSelect, updatePlatformText } = matchedData(req);
    await db.updatePlatform(updatePlatformSelect, updatePlatformText);
    res.redirect('/');
  },
];

const deletePlatformPost = [
  validateDeletePlatform,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const platforms = await db.getAllPlatforms();
      return res.status(400).render('./platforms/delete', {
        platforms: platforms,
        errors: errors.array(),
      });
    }

    const { deletePlatform } = matchedData(req);
    await db.deletePlatform(deletePlatform);
    res.redirect('/');
  },
];

module.exports = {
  createPlatformGet,
  updatePlatformGet,
  deletePlatformGet,
  createPlatformPost,
  updatePlatformPost,
  deletePlatformPost,
};
