require('dotenv').config();

const express = require('express');
const app = express();
const path = require('node:path');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { pool } = require('./models/pool');
const indexRouter = require('./routes/indexRouter');
const membershipRouter = require('./routes/membershipRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'theodinproject',
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// == PASSPORT ==

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        'SELECT * FROM members_users WHERE username = $1',
        [username],
      );
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM members_users WHERE id = $1',
      [id],
    );
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

// == ROUTES ==

app.use('/', indexRouter);
app.use('/membership', membershipRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.error(err);

  console.log('Listening on port', PORT);
});
