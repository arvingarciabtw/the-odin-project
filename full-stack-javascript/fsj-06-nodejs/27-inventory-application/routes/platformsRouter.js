const { Router } = require('express');
const platformsRouter = Router();
const { getGamesByPlatform } = require('../controllers/gamesController');

platformsRouter.get('/create', (_req, res) => {
  res.render('./platforms/create');
});

platformsRouter.get('/update', (_req, res) => {
  res.render('./platforms/update');
});

platformsRouter.get('/delete', (_req, res) => {
  res.render('./platforms/delete');
});

platformsRouter.get('/:name', getGamesByPlatform);

module.exports = platformsRouter;
