const { PrismaClient } = require('../generated/prisma');
const { body, validationResult, matchedData } = require('express-validator');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const prisma = new PrismaClient();

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
      const existingUser = await prisma.user.findUnique({
        where: {
          username: value,
        },
      });

      if (existingUser) {
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
      const user = await prisma.user.findUnique({
        where: {
          username: value,
        },
      });
      if (!user) {
        throw new Error('No username found.');
      }
      return true;
    }),
  body('password')
    .notEmpty()
    .withMessage('Password is required.')
    .custom(async (value, { req }) => {
      const user = await prisma.user.findUnique({
        where: {
          username: req.body.username,
        },
      });

      if (user) {
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

      await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: hashedPassword,
          folders: {
            create: [{ name: 'Root' }],
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

const postLogIn = [
  validateLogin,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('index', {
        errors: errors.array(),
        user: req.user,
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
