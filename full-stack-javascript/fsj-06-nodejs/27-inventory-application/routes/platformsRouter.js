const { Router } = require('express');
const platformsRouter = Router();
const { getGamesByPlatform } = require('../controllers/gamesController');
const platformsController = require('../controllers/platformsController');

platformsRouter.get('/create', platformsController.createPlatformGet);
platformsRouter.post('/create', platformsController.createPlatformPost);
platformsRouter.get('/update', platformsController.updatePlatformGet);
platformsRouter.get('/delete', platformsController.deletePlatformGet);

platformsRouter.get('/:name', getGamesByPlatform);

module.exports = platformsRouter;
