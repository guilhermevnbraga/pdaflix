import { Router } from "express";

import { createMovieController } from "../controllers/movie.controller.js";

const movieRouter = Router();

movieRouter.post("/movie", createMovieController);

export default movieRouter;
