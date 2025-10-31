const { Pool } = require('pg');

const isProd = process.env.NODE_ENV === 'production';
const connection = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: isProd
    ? process.env.DATABASE_URL + '?ssl=true'
    : connection,
});

module.exports = { pool };
