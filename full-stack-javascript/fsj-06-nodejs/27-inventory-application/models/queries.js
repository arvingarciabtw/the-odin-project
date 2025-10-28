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
    'SELECT games.id, games.name AS game_name, platforms.name AS platform_name FROM games JOIN platforms ON platforms.id = games.platform_id ORDER BY games.id DESC;',
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
    'SELECT games.name AS game_name, platforms.name AS platform_name FROM games JOIN platforms ON platforms.id = games.platform_id WHERE LOWER(platforms.name) = LOWER($1) ORDER BY games.id DESC;',
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

async function createGame(gameName, gamePlatform) {
  const cleanedGame = capitalizeWords(gameName);

  console.log('Cleaned game:', cleanedGame);
  console.log('Uncleaned platform:', gamePlatform);

  const { rows } = await pool.query(
    `INSERT INTO games (name, platform_id)
     SELECT $1, id 
     FROM platforms 
     WHERE name = $2
     RETURNING *;`,
    [cleanedGame, gamePlatform],
  );

  console.log(rows);
  return rows;
}

// == UPDATE ==

async function updatePlatform(oldPlatform, newPlatform) {
  const cleanedOldPlatform = urlToName(oldPlatform);
  const cleanedNewPlatform = capitalizeWords(newPlatform);

  const { rows } = await pool.query(
    'UPDATE platforms SET name = $1 WHERE LOWER(name) = LOWER($2) RETURNING *;',
    [cleanedNewPlatform, cleanedOldPlatform],
  );
  console.log(rows);
  return rows;
}

async function updateGame(gameId, newName, newPlatform) {
  const cleanedNewName = capitalizeWords(newName);

  const platformResult = await pool.query(
    'SELECT id FROM platforms WHERE LOWER(name) = LOWER($1);',
    [newPlatform],
  );

  if (platformResult.rows.length === 0) {
    throw new Error('Platform not found');
  }

  const platformId = platformResult.rows[0].id;

  const { rows } = await pool.query(
    'UPDATE games SET name = $1, platform_id = $2 WHERE id = $3 RETURNING *;',
    [cleanedNewName, platformId, gameId],
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
  updatePlatform,
  deletePlatform,
  createGame,
  updateGame,
};
