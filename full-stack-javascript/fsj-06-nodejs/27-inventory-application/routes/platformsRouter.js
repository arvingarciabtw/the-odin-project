const { Router } = require('express');
const platformsRouter = Router();
const { getGamesByPlatform } = require('../controllers/gamesController');

platformsRouter.get('/:name', getGamesByPlatform);

module.exports = platformsRouter;
