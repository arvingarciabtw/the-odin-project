const db = require('../models/queries');
const { body, validationResult, matchedData } = require('express-validator');

// == VALIDATION AND SANITIZATION ==

const validateCreateGame = [
  body('createGameText')
    .trim()
    .notEmpty()
    .withMessage('The field must not be empty.'),
  body('createGamePlatform')
    .trim()
    .notEmpty()
    .withMessage('The field must not be empty.'),
];

const validateUpdateGame = [
  body('updateGameText')
    .trim()
    .notEmpty()
    .withMessage('The field must not be empty.'),
  body('updateGamePlatform')
    .trim()
    .notEmpty()
    .withMessage('The field must not be empty.'),
];

async function getGames(_req, res) {
  const games = await db.getAllGames();
  const platforms = await db.getAllPlatforms();

  res.render('index', { games: games, platforms: platforms });
}

async function getGamesByPlatform(req, res) {
  const games = await db.getGamesByPlatform(req.params.name);
  const platforms = await db.getAllPlatforms();

  res.render('index', { games: games, platforms: platforms });
}

// == GET REQUESTS ==

async function createGameGet(_req, res) {
  const platforms = await db.getAllPlatforms();

  res.render('./games/create', { platforms: platforms });
}

async function updateGameGet(req, res) {
  const { id } = req.params;
  const game = await db.getGameById(id);
  const platforms = await db.getAllPlatforms();

  res.render('./games/update', { id: id, game: game, platforms: platforms });
}

// == POST REQUESTS ==

const createGamePost = [
  validateCreateGame,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('./games/create', {
        errors: errors.array(),
      });
    }

    const { createGameText, createGamePlatform } = matchedData(req);
    await db.createGame(createGameText, createGamePlatform);
    res.redirect('/');
  },
];

const updateGamePost = [
  validateUpdateGame,
  async (req, res) => {
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const games = await db.getAllGames();
      const platforms = await db.getAllPlatforms();
      return res.status(400).render('./games/update', {
        id: id,
        games: games,
        platforms: platforms,
        errors: errors.array(),
      });
    }

    const { updateGameText, updateGamePlatform } = matchedData(req);
    await db.updateGame(id, updateGameText, updateGamePlatform);
    res.redirect('/');
  },
];

module.exports = {
  getGames,
  getGamesByPlatform,
  createGameGet,
  updateGameGet,
  createGamePost,
  updateGamePost,
};
