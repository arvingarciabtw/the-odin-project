import { Router } from "express";
import passport from "passport";
import usersController from "../controllers/usersController.js";

const users = Router();

const auth = passport.authenticate("jwt", { session: false });

users.get("/", auth, usersController.getUsers);
users.get("/:userId", auth, usersController.getUserById);
users.post("/:userId/follow", auth, usersController.followUser);
users.post("/:userId/unfollow", auth, usersController.unfollowUser);

export default users;
