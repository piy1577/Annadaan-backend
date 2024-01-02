import { Router } from "express";
import * as Controller from "../controllers/Ngo.Controller.js";
const ngoRouter = Router();

ngoRouter.post("/register", Controller.register);
ngoRouter.post("/getNgo", Controller.getNgo);
ngoRouter.get("/ngo/:id", Controller.ngoId);

export default ngoRouter;
