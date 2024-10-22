import { Router } from "express";
import { register } from "../controllers/auth_controllers.js";

const authRouter = Router("/api");
authRouter.post("/register", register);

export default authRouter;
