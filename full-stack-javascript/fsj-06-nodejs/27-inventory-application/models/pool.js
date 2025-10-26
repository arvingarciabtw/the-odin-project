const { Pool } = require('pg');

const isProd = process.env.NODE_ENV === 'production';
const connection = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProd
    ? process.env.DB_DATABASE_URL + '?ssl=true'
    : connection,
});

module.exports = { pool };
