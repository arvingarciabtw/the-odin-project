import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Backend running!');
});

app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log('Listening in port', process.env.PORT);
});
