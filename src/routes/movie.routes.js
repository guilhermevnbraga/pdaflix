import { Router } from "express";

import {
  createMovieController,
  deleteMovieController,
  getAllMoviesController,
  updateMovieController,
} from "../controllers/movie.controller.js";

const movieRouter = Router();

movieRouter.post("/movie", createMovieController);
movieRouter.get("/movie", getAllMoviesController);
movieRouter.patch("/movie/:id", updateMovieController);
movieRouter.delete("/movie/:id", deleteMovieController);

export default movieRouter;
