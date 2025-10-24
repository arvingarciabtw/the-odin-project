const { Router } = require("express");
const {
  createMessageGet,
  createMessagePost,
} = require("../controllers/messagesController");

const newRouter = Router();

newRouter.get("/", createMessageGet);

newRouter.post("/", createMessagePost);

module.exports = newRouter;
