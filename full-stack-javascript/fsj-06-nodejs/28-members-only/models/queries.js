const { pool } = require('./pool');

async function getUserById(id) {
  const { rows } = await pool.query('SELECT * FROM users WHERE id = ($1)', [
    id,
  ]);
  console.log(rows);
  return rows[0];
}

async function updateUserMembership(id) {
  const { rows } = await pool.query(
    `UPDATE users SET membership_status = 'true' WHERE id = ($1)`,
    [id],
  );
  console.log(rows);
  return rows[0];
}

module.exports = {
  getUserById,
  updateUserMembership,
};
