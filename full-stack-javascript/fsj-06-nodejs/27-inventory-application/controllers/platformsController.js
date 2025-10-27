const { body, validationResult, matchedData } = require('express-validator');

// == VALIDATION AND SANITIZATION ==

const validatePlatform = [
  body('createPlatform')
    .trim()
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage('The field must only have letters and numbers.')
    .notEmpty()
    .withMessage('The field must not be empty.'),
];

// == GET REQUESTS ==

function createPlatformGet(_req, res) {
  res.render('./platforms/create');
}

function updatePlatformGet(_req, res) {
  res.render('./platforms/update');
}

function deletePlatformGet(_req, res) {
  res.render('./platforms/delete');
}

// == POST REQUESTS ==

const createPlatformPost = [
  validatePlatform,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('./platforms/create', {
        errors: errors.array(),
      });
    }

    const { createPlatform } = matchedData(req);
    // otherwise, then have some sql stuff to add the input to the database
    res.redirect('/');
  },
];

module.exports = {
  createPlatformGet,
  updatePlatformGet,
  deletePlatformGet,
  createPlatformPost,
};
