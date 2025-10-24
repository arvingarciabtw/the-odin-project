const { Router } = require("express");
const { getMessages } = require("../controllers/messagesController");

const indexRouter = Router();

indexRouter.get("/", getMessages);

module.exports = indexRouter;
