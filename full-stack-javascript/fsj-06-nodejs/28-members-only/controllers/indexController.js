const db = require('../models/queries');

async function getIndex(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { user: req.user, messages: messages.reverse() });
}

module.exports = {
  getIndex,
};
