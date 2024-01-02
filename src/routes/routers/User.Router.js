import { Router } from "express";
import * as Controller from "../controllers/User.Controller.js";

const userRouter = Router();

userRouter.post("/signup", Controller.signIn);
userRouter.post("/login", Controller.login);
userRouter.get("/states", Controller.getStates);

export default userRouter;
