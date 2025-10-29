#! /usr/bin/env node

const { Client } = require('pg');

const SQL = `
CREATE TABLE users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  membership_status BOOLEAN NOT NULL 
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  message_timestamp TIMESTAMP NOT NULL,
  message_text TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id) 
);
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
    console.log('Done!');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
