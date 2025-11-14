import request from 'supertest';
import express from 'express';
import coordinatesRouter from '../routes/coordinatesRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/coordinates', coordinatesRouter);

describe('POST /api/coordinates', () => {
  test('should return 400 if x/y is missing', (done) => {
    request(app).post('/api/coordinates').send({}).expect(400, done);
  });

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
  });

  describe('Minun coordinates', () => {
    test('should return 200 if x & y is correct', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 1075, y: 760 })
        .expect(200, done);
    });

    test('should return 200 if x & y is correct (within +tolerance)', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 1090, y: 775 })
        .expect(200, done);
    });

    test('should return 200 if x & y is correct (within -tolerance)', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 1060, y: 750 })
        .expect(200, done);
    });
  });

  describe('Roselia coordinates', () => {
    test('should return 200 if x & y is correct', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 775, y: 775 })
        .expect(200, done);
    });

    test('should return 200 if x & y is correct (within +tolerance)', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 790, y: 785 })
        .expect(200, done);
    });

    test('should return 200 if x & y is correct (within -tolerance)', (done) => {
      request(app)
        .post('/api/coordinates')
        .send({ x: 760, y: 765 })
        .expect(200, done);
    });
  });
});
