import { Router } from "express";
import {
  createFinishedController,
  deleteFinishedController,
  getAllFinishedsByUserIdController,
  updateFinishedController,
} from "../controllers/finisheds.controller.js";

const finishedRouter = Router();

finishedRouter.post("/finished", createFinishedController);
finishedRouter.get("/finisheds/:userid", getAllFinishedsByUserIdController);
finishedRouter.patch("/finished/:id", updateFinishedController);
finishedRouter.delete("/finished/:id", deleteFinishedController);

export default finishedRouter;