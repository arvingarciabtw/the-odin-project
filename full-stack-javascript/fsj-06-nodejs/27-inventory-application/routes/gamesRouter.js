const { Router } = require('express');
const gamesRouter = Router();
const gamesController = require('../controllers/gamesController');

gamesRouter.get('/create', gamesController.createGameGet);
gamesRouter.post('/create', gamesController.createGamePost);
gamesRouter.get('/update/:id', gamesController.updateGameGet);
gamesRouter.post('/update/:id', gamesController.updateGamePost);

module.exports = gamesRouter;
