const { pool } = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT text_message, username, TO_CHAR(date_added, 'MON DD, YYYY') AS date_added FROM messages",
  );
  console.log(rows);
  return rows;
}

async function insertMessage(textMessage, username, dateAdded) {
  await pool.query(
    "INSERT INTO messages (text_message, username, date_added) VALUES ($1, $2, $3)",
    [textMessage, username, dateAdded],
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
};
