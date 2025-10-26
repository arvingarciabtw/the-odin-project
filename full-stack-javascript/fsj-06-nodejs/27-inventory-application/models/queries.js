const { pool } = require('./pool');

// == HELPERS ==

function urlToName(url) {
  return url
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

async function getAllGames() {
  const { rows } = await pool.query(
    'SELECT games.name AS game_name, platforms.name AS platform_name FROM games JOIN platforms ON platforms.id = games.platform_id;',
  );
  console.log(rows);
  return rows;
}

async function getAllPlatforms() {
  const { rows } = await pool.query('SELECT id, name FROM platforms;');
  console.log(rows);
  return rows;
}

async function getGamesByPlatform(passedPlatform) {
  const cleanedPlatform = urlToName(passedPlatform);

  const { rows } = await pool.query(
    'SELECT games.name AS game_name, platforms.name AS platform_name FROM games JOIN platforms ON platforms.id = games.platform_id WHERE LOWER(platforms.name) = LOWER($1);',
    [cleanedPlatform],
  );
  console.log(rows);
  return rows;
}

module.exports = {
  getAllGames,
  getAllPlatforms,
  getGamesByPlatform,
};
