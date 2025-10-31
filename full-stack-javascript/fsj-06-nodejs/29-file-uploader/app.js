const express = require('express');
const session = require('express-session');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');
const passport = require('passport');

const app = express();

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

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.error(err);

  console.log('Listening in port', PORT);
});
