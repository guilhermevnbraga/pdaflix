import { Router } from "express";

import { createUserController } from "../controllers/movie.controller.js";

const movieRouter = Router();

movieRouter.post("/movie", createUserController);

export default movieRouter;
