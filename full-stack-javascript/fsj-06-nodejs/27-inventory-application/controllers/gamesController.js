const db = require('../models/queries');

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

module.exports = { getGames, getGamesByPlatform };
