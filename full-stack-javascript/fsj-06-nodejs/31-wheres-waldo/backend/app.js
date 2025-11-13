import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import coordinatesRouter from './routes/coordinatesRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/coordinates', coordinatesRouter);

app.get('/', (req, res) => {
  res.send("Backend for Where's Waldo running!");
});

app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log('Listening on port', process.env.PORT);
});
