const db = require("../db/queries");

async function getMessages(_req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
}

async function createMessageGet(_req, res) {
  res.render("form");
}

async function createMessagePost(req, res) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  const dateAdded = new Date().toISOString().split("T")[0];

  await db.insertMessage(messageText, messageUser, dateAdded);

  res.redirect("/");
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
};
