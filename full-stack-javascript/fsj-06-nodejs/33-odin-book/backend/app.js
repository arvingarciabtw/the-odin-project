import "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";
import passportConfig from "./passport.js";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
passportConfig(passport);

app.use("/api/auth", routes.auth);
app.use("/api/posts", routes.posts);

app.get("/", (_req, res) => {
	res.send("Backend for Yappr running!");
});

app.listen(process.env.PORT, (err) => {
	if (err) throw new Error(err.message);

	console.log("Listening in port", process.env.PORT);
});
