import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { URL } from "node:url";

const server = http.createServer((req, res) => {
  const base = `http://${req.headers.host}${path.dirname(req.url)}`;

  const ext = path.extname(req.url);
  let filename = "";
  let contentType = "text/html";

  if (ext && ext !== ".html") {
    filename = "." + req.url;

    const contentTypes = {
      ".css": "text/css",
      ".js": "text/javascript",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".webp": "image/webp",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
    };
    contentType = contentTypes[ext] || "text/plain";
  } else {
    const input = path.basename(req.url, ".html");
    const htmlUrl = new URL(input, base);

    if (htmlUrl.pathname === "/") {
      filename = "./index.html";
    } else {
      filename = "." + htmlUrl.pathname + ".html";
    }
  }

  fs.readFile(
    filename,
    ext === ".css" || ext === ".js" ? "utf-8" : null,
    (err, data) => {
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
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    },
  );
});

server.listen(8080);
