import request from 'supertest';
import express from 'express';
import coordinatesRouter from '../routes/coordinatesRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/coordinates', coordinatesRouter);

// test suite for POST /api/check
describe('POST /api/coordinates', () => {
  // test for no coordinates
  test('should return 400 if x/y is missing', (done) => {
    request(app).post('/api/coordinates').send({}).expect(400, done);
  });

  // test for correct coordinates

  // test for incorrect coordinates
});
