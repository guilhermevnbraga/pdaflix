import { Router } from "express";

import { createUserController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/user", createUserController);

export default userRouter;
