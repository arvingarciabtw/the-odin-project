import { Router } from "express";
import passport from "passport";
import usersController from "../controllers/usersController.js";

const users = Router();

const auth = passport.authenticate("jwt", { session: false });

users.get("/", auth, usersController.getUsers);

export default users;
