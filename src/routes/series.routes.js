import { Router } from "express";

import {
  createSeriesController,
  getAllSeriesController,
  updateSeriesController,
  deleteSeriesController,
} from "../controllers/series.controller.js";

const seriesRouter = Router();

seriesRouter.post("/series", createSeriesController);
seriesRouter.get("/series", getAllSeriesController);
seriesRouter.patch("/series/:id", updateSeriesController);
seriesRouter.delete("/series/:id", deleteSeriesController);

export default seriesRouter;
