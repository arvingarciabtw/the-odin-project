import { Router } from "express";
import passport from "passport";
import postsController from "../controllers/postsController.js";

const posts = Router();

const auth = passport.authenticate("jwt", { session: false });

posts.get("/", auth, postsController.getPosts);
posts.post("/", auth, postsController.createPost);

export default posts;
