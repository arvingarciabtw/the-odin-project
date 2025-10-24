const { Router } = require("express");
const { messages } = require("../messages");

const indexRouter = Router();

indexRouter.get("/", (_req, res) => {
  res.render("index", { messages: messages });
});

module.exports = indexRouter;
