const { pool } = require('./pool');

// == HELPERS ==

function urlToName(url) {
  return url
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// == READ ==

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

// == CREATE ==

async function createPlatform(passedPlatform) {
  const cleanedPlatform = capitalizeWords(passedPlatform);

  const { rows } = await pool.query(
    'INSERT INTO platforms (name) VALUES ($1);',
    [cleanedPlatform],
  );
  console.log(rows);
  return rows;
}

// == DELETE ==

async function deletePlatform(passedPlatform) {
  const cleanedPlatform = urlToName(passedPlatform);

  const { rows } = await pool.query(
    'DELETE FROM platforms WHERE LOWER(name) = LOWER($1);',
    [cleanedPlatform],
  );
  console.log(rows);
  return rows;
}

module.exports = {
  getAllGames,
  getAllPlatforms,
  getGamesByPlatform,
  createPlatform,
  deletePlatform,
};
