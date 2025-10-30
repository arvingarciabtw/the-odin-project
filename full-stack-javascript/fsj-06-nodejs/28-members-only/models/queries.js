const { pool } = require('./pool');

// == READ ==

async function getUserById(id) {
  const { rows } = await pool.query(
    'SELECT * FROM members_users WHERE id = ($1)',
    [id],
  );
  console.log(rows);
  return rows[0];
}

async function getAllMessages() {
  const { rows } = await pool.query(
    'SELECT *, members_users.first_name, members_users.last_name, members_messages.id AS message_id FROM members_messages JOIN members_users ON members_users.id = members_messages.user_id;',
  );
  console.log(rows);
  return rows;
}

// == CREATE ==

async function createMessage(title, messageText, userId) {
  const { rows } = await pool.query(
    'INSERT INTO members_messages (title, message_timestamp, message_text, user_id) VALUES ($1, $2, $3, $4);',
    [title, new Date(), messageText, userId],
  );
  console.log(rows);
  return rows;
}

// == UPDATE ==

async function updateUserMembership(id) {
  const { rows } = await pool.query(
    `UPDATE members_users SET membership_status = 'true' WHERE id = ($1)`,
    [id],
  );
  console.log(rows);
  return rows[0];
}

// == DELETE ==

async function deleteMessage(id) {
  const { rows } = await pool.query(
    'DELETE FROM members_messages WHERE id = ($1)',
    [id],
  );
  console.log(rows);
  return rows;
}

module.exports = {
  getUserById,
  getAllMessages,
  updateUserMembership,
  createMessage,
  deleteMessage,
};
