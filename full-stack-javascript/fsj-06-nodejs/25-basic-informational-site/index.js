import express from "express";
import "dotenv/config";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/styles", express.static(join(__dirname, "styles")));
app.use("/assets", express.static(join(__dirname, "assets")));

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (_req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact-me", (_req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

app.use((_req, res) => {
  res.status(404).sendFile(join(__dirname, "404.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`My first Express app. Listening on ${PORT}...`);
});

export default app;
