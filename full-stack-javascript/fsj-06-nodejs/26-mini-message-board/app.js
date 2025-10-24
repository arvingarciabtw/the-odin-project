const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "For a man to conquer himself is the first and noblest of all victories.",
    user: "Plato",
    added: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  },
  {
    text: "He who is not satisfied with a little, is satisfied with nothing.",
    user: "Epicurus",
    added: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  },
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  messages.unshift({
    text: messageText,
    user: messageUser,
    added: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  });
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}...`);
});
