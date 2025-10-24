const { Router } = require("express");
const { messages } = require("../messages");

const newRouter = Router();

newRouter.get("/", (_req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  messages.unshift({
    text: messageText,
    user: messageUser,
    added: `${new Date().toLocaleDateString()}`,
  });
  res.redirect("/");
});

module.exports = newRouter;
