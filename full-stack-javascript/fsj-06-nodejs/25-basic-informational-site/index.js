import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { URL } from "node:url";

const server = http.createServer((req, res) => {
  const input = path.basename(req.url, ".html");
  const base = `http://${req.headers.host}${path.dirname(req.url)}`;
  const myUrl = new URL(input, base);

  let filename = "";

  if (myUrl.pathname === "/") {
    filename = "." + "/index.html";
  } else {
    filename = "." + myUrl.pathname + ".html";
  }

  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      fs.readFile("./404.html", "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Server Error");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
});

server.listen(8080);
