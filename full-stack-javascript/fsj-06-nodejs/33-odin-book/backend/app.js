import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (_req, res) => {
	res.send("Backend for Yappr running!");
});

app.listen(process.env.PORT, (err) => {
	if (err) throw new Error(err.message);

	console.log("Listening in port", process.env.PORT);
});
