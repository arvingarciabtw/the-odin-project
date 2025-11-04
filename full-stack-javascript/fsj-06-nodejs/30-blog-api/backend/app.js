import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import passportConfig from './passport.js';
import routes from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(passport.initialize());
passportConfig(passport);

app.use('/api/auth', routes.auth);

app.get('/', (_req, res) => {
  res.send('Backend running!');
});

app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log('Listening in port', process.env.PORT);
});
