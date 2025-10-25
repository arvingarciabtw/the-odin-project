require('dotenv').config();

const express = require('express');
const app = express();
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) console.error(err);

  console.log('Listening to port', PORT);
});
