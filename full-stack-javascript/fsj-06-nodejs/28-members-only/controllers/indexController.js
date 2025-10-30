const db = require('../models/queries');
const { body, validationResult, matchedData } = require('express-validator');

const validateAddMessage = [
  body('title').trim().notEmpty().withMessage('Title is required.'),
  body('messageText')
    .trim()
    .notEmpty()
    .withMessage('Message text is required.'),
];

async function getIndex(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { user: req.user, messages: messages.reverse() });
}

async function getAddMessage(req, res) {
  const { id } = req.params;
  const user = await db.getUserById(id);
  res.render('add-message-form', { user: user });
}

const postAddMessage = [
  validateAddMessage,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('add-message-form', {
        errors: errors.array(),
        formData: req.body,
      });
    }

    const { id } = req.params;
    const { title, messageText } = matchedData(req);
    await db.createMessage(title, messageText, id);
    res.redirect('/');
  },
];

module.exports = {
  getIndex,
  getAddMessage,
  postAddMessage,
};
