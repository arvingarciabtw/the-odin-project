const { Router } = require('express');
const indexRouter = Router();
const { pool } = require('../models/pool');
const bcrypt = require('bcryptjs');
const passport = require('passport');

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
indexRouter.get('/membership', (req, res) => {
  res.render('membership');
});

module.exports = indexRouter;
