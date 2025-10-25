#! /usr/bin/env node

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS platforms (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  platform_id INTEGER NOT NULL,
  FOREIGN KEY (platform_id) REFERENCES platforms (id)
);

INSERT INTO platforms (name) 
VALUES
  ('PC'),
  ('PS5'),
  ('Xbox Series X'),
  ('Nintendo Switch');

INSERT INTO games (name, platform_id)
VALUES
  ('Hollow Knight: Silksong', 4),
  ('The Legend of Zelda: Tears of the Kingdom', 4),
  ('Super Mario Bros. Wonder', 4),
  ('Metroid Prime 4', 4),
  ('Animal Crossing: New Horizons', 4),
  ('Elden Ring', 1),
  ('Baldur''s Gate 3', 1),
  ('Cyberpunk 2077', 1),
  ('Counter-Strike 2', 1),
  ('Dota 2', 1),
  ('God of War Ragnarök', 2),
  ('Spider-Man 2', 2),
  ('Final Fantasy XVI', 2),
  ('Horizon Forbidden West', 2),
  ('The Last of Us Part II', 2),
  ('Starfield', 3),
  ('Forza Motorsport', 3),
  ('Halo Infinite', 3),
  ('Gears 5', 3),
  ('Sea of Thieves', 3);
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
