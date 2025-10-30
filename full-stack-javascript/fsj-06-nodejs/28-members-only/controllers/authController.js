const { pool } = require('../models/pool');
const db = require('../models/queries');
const { body, validationResult, matchedData } = require('express-validator');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const validateSignUp = [
  body('firstName').trim().notEmpty().withMessage('First name is required.'),
  body('lastName').trim().notEmpty().withMessage('Last name is required.'),
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required.')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long.')
    .custom(async (value) => {
      const existingUser = await pool.query(
        'SELECT * FROM members_users WHERE username = $1',
        [value],
      );

      if (existingUser.rows.length > 0) {
        throw new Error('Username already exists.');
      }

      return true;
    }),
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
        'SELECT * FROM members_users WHERE username = $1',
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
        'SELECT * FROM members_users WHERE username = $1',
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

function getSignUp(_req, res) {
  res.render('sign-up-form');
}

function getLogOut(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
}

const postSignUp = [
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
        'INSERT INTO members_users (first_name, last_name, username, password, membership_status) VALUES ($1, $2, $3, $4, $5)',
        [firstName, lastName, username, hashedPassword, 'false'],
      );
      res.redirect('/');
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
];

const postLogIn = [
  validateLogin,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const messages = await db.getAllMessages();
      return res.status(400).render('index', {
        errors: errors.array(),
        user: req.user,
        messages: messages.reverse(),
        formData: req.body,
      });
    }

    next();
  },
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
  }),
];

module.exports = {
  getSignUp,
  getLogOut,
  postSignUp,
  postLogIn,
};
