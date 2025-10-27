require('dotenv').config();

const express = require('express');
const app = express();
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const platformsRouter = require('./routes/platformsRouter');
const gamesRouter = require('./routes/gamesRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/platforms', platformsRouter);
app.use('/games', gamesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) console.error(err);

  console.log('Listening to port', PORT);
});
