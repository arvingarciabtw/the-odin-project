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
    .withMessage('The field must not be empty.')
    .custom(async (value) => {
      if (value !== process.env.SECRET_CODE) {
        throw new Error('Incorrect secret code. Try again.');
      }
      return true;
    }),
];

const validateSignUp = [
  body('firstName').trim().notEmpty().withMessage('First name is required.'),
  body('lastName').trim().notEmpty().withMessage('Last name is required.'),
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required.')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long.'),
  body('password')
    .notEmpty()
    .withMessage('Password is required.')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long.'),
  body('confirmPassword')
    .notEmpty()
    .withMessage('Please confirm your password.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match.');
      }
      return true;
    }),
];

const validateLogin = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required.')
    .custom(async (value) => {
      const { rows } = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [value],
      );
      if (rows.length === 0) {
        throw new Error('No username found.');
      }
      return true;
    }),
  body('password')
    .notEmpty()
    .withMessage('Password is required.')
    .custom(async (value, { req }) => {
      const { rows } = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [req.body.username],
      );

      if (rows.length > 0) {
        const user = rows[0];
        const match = await bcrypt.compare(value, user.password);
        if (!match) {
          throw new Error('Incorrect password.');
        }
      }
      return true;
    }),
];

indexRouter.get('/', async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { user: req.user, messages: messages.reverse() });
});
indexRouter.get('/sign-up', (req, res) => {
  res.render('sign-up-form');
});
indexRouter.post('/sign-up', [
  validateSignUp,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('sign-up-form', {
        errors: errors.array(),
        formData: req.body,
      });
    }

    try {
      const { firstName, lastName, username, password } = matchedData(req);
      const hashedPassword = await bcrypt.hash(password, 10);

      await pool.query(
        'INSERT INTO users (first_name, last_name, username, password, membership_status) VALUES ($1, $2, $3, $4, $5)',
        [firstName, lastName, username, hashedPassword, 'false'],
      );
      res.redirect('/');
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
]);
indexRouter.post('/log-in', [
  validateLogin,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const messages = await db.getAllMessages();
      return res.status(400).render('index', {
        errors: errors.array(),
        user: req.user,
        messages: messages.reverse(),
      });
    }

    next();
  },
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
  }),
]);
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
]);

module.exports = indexRouter;
