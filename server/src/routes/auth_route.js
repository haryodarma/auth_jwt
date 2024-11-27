import { Router } from "express";
import {
  getUsers,
  login,
  refreshToken,
  register,
} from "../controllers/auth_controllers.js";
import { verifyToken } from "../middlewares/auth_middleware.js";

const authRouter = Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/users", verifyToken, getUsers);
authRouter.get("/refreshToken", refreshToken);

export default authRouter;
