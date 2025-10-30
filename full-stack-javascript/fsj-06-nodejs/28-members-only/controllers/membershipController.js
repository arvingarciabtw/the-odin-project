const db = require('../models/queries');
const { body, validationResult, matchedData } = require('express-validator');

const validateMembership = [
  body('membership')
    .trim()
    .notEmpty()
    .withMessage('The field must not be empty.')
    .custom(async (value) => {
      if (value !== process.env.SECRET_CODE) {
        throw new Error('Incorrect secret code. Try again.');
      }
      return true;
    }),
];

async function getMembership(req, res) {
  const { id } = req.params;
  const user = await db.getUserById(id);

  res.render('membership', { user: user });
}

const postMembership = [
  validateMembership,
  async (req, res) => {
    const { id } = req.params;
    const user = await db.getUserById(id);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('membership', {
        user: user,
        errors: errors.array(),
      });
    }

    const { membership } = matchedData(req);
    console.log('MEMBERSHIP:');
    console.log(membership);
    if (membership === process.env.SECRET_CODE) {
      await db.updateUserMembership(id);
    }
    res.redirect('/');
  },
];

module.exports = {
  getMembership,
  postMembership,
};
