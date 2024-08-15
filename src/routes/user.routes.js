import { Router } from "express";

import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/user", createUserController);
userRouter.get("/user", getAllUsersController);
userRouter.delete("/user/:id", deleteUserController);
userRouter.patch("/user/:id", updateUserController);

export default userRouter;
