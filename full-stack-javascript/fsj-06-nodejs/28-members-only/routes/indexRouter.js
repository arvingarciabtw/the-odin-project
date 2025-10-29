const { Router } = require('express');
const indexRouter = Router();
const { pool } = require('../models/pool');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../models/queries');
const { body, validationResult, matchedData } = require('express-validator');

const validateMembership = [
  body('membership')
    .trim()
    .notEmpty()
    .withMessage('The field must not be empty.'),
];

indexRouter.get('/', (req, res) => {
  res.render('index', { user: req.user });
});
indexRouter.get('/sign-up', (req, res) => {
  res.render('sign-up-form');
});
indexRouter.post('/sign-up', async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await pool.query(
      'INSERT INTO users (first_name, last_name, username, password, membership_status) VALUES ($1, $2, $3, $4, $5)',
      [
        req.body.firstName,
        req.body.lastName,
        req.body.username,
        hashedPassword,
        'false',
      ],
    );
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});
indexRouter.post(
  '/log-in',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
  }),
);
indexRouter.get('/log-out', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});
indexRouter.get('/membership/:id', async (req, res) => {
  const { id } = req.params;
  const user = await db.getUserById(id);

  res.render('membership', { user: user });
});
indexRouter.post('/membership/:id', [
  validateMembership,
  async (req, res) => {
    const { id } = req.params;
    const user = await db.getUserById(id);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('./membership/:id', {
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
]);

module.exports = indexRouter;
