const { Router } = require('express');
const indexRouter = Router();
const { getGames } = require('../controllers/gamesController');

indexRouter.get('/', getGames);

module.exports = indexRouter;
