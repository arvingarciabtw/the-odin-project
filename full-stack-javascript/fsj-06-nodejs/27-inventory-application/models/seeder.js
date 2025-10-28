#! /usr/bin/env node

const { Client } = require('pg');

const SQL = `
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS platforms CASCADE;

CREATE TABLE IF NOT EXISTS platforms (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  platform_id INTEGER NOT NULL,
  FOREIGN KEY (platform_id) REFERENCES platforms (id) ON DELETE CASCADE,
  UNIQUE(name, platform_id)
);

INSERT INTO platforms (name) 
VALUES
  ('PC'),
  ('PS5'),
  ('Xbox Series X'),
  ('Nintendo Switch');

INSERT INTO games (name, platform_id)
VALUES
  ('Elden Ring', 1),
  ('God of War Ragnarök', 2),
  ('Hollow Knight: Silksong', 4),
  ('Starfield', 3),
  ('Baldur''s Gate 3', 1),
  ('The Legend of Zelda: Tears of the Kingdom', 4),
  ('Spider-Man 2', 2),
  ('Cyberpunk 2077', 1),
  ('Forza Motorsport', 3),
  ('Final Fantasy XVI', 2),
  ('Super Mario Bros. Wonder', 4),
  ('Counter-Strike 2', 1),
  ('Demon''s Souls', 2),
  ('Halo Infinite', 3),
  ('Metroid Prime 4', 4),
  ('Dota 2', 1),
  ('Horizon Forbidden West', 2),
  ('Splatoon 3', 4),
  ('Ratchet & Clank: Rift Apart', 2),
  ('Animal Crossing: New Horizons', 4),
  ('Gears 5', 3),
  ('The Last of Us Part II', 2);
`;

async function main() {
  console.log('Seeding...');
  const connectionString = process.argv[2];
  if (!connectionString) {
    console.error('Please provide a database connection string.');
    process.exit(1);
  }

  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log('done');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
