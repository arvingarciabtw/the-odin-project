import { Router } from "express";
import passport from "passport";
import commentsController from "../controllers/commentsController.js";

const comments = Router();

const auth = passport.authenticate("jwt", { session: false });

comments.get("/:postId", auth, commentsController.getComments);
comments.post("/", auth, commentsController.createComment);

export default comments;
