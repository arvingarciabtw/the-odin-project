const { Router } = require('express');
const platformsRouter = Router();
const { getGamesByPlatform } = require('../controllers/gamesController');
const platformsController = require('../controllers/platformsController');

platformsRouter.get('/create', platformsController.createPlatformGet);
platformsRouter.post('/create', platformsController.createPlatformPost);
platformsRouter.get('/update', platformsController.updatePlatformGet);
platformsRouter.post('/update', platformsController.updatePlatformPost);
platformsRouter.get('/delete', platformsController.deletePlatformGet);
platformsRouter.post('/delete', platformsController.deletePlatformPost);

platformsRouter.get('/:name', getGamesByPlatform);

module.exports = platformsRouter;
