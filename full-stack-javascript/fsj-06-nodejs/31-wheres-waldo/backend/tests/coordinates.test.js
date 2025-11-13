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

  // charmander ~ 1120 470
  // minun ~ 1075 760
  // roselia ~ 775 775
  // allow tolerance of +- 20?
  describe('Charmander coordinates', () => {
    test('should return 200 if x & y is correct', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 1120, y: 470 })
        .expect(200, done);
    });

    test('should return 200 if x & y is correct (within +tolerance)', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 1130, y: 485 })
        .expect(200, done);
    });

    test('should return 200 if x & y is correct (within -tolerance)', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 1105, y: 455 })
        .expect(200, done);
    });

    test('should return 400 if x & y is incorrect', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 950, y: 470 })
        .expect(400, done);
    });
  });
});
