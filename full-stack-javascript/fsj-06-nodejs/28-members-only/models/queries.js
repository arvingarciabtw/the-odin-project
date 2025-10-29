const { pool } = require('./pool');

// == READ ==

async function getUserById(id) {
  const { rows } = await pool.query('SELECT * FROM users WHERE id = ($1)', [
    id,
  ]);
  console.log(rows);
  return rows[0];
}

async function getAllMessages() {
  const { rows } = await pool.query(
    'SELECT *, users.first_name, users.last_name FROM messages JOIN users ON users.id = messages.user_id;',
  );
  console.log(rows);
  return rows;
}

// == UPDATE ==

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
  getAllMessages,
  updateUserMembership,
};
