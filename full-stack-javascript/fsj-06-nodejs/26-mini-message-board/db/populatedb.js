#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text_message TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  date_added DATE NOT NULL
);

INSERT INTO messages (text_message, username, date_added) 
VALUES
  ('No great thing is created suddenly.', 'Epictetus', '2024-10-25')
`;

async function main() {
  console.log("seeding...");
  const connectionString = process.argv[2];
  if (!connectionString) {
    console.error("Please provide a database connection string.");
    process.exit(1);
  }

  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("done");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
