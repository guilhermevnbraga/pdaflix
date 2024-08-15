import { Router } from "express";

import { createAnimeController, deleteAnimeController, getAllAnimesController, updateAnimeController } from "../controllers/anime.controller.js";
const animeRouter = Router();

animeRouter.post("/anime", createAnimeController);
animeRouter.get("/anime", getAllAnimesController);
animeRouter.patch("/anime/:id", updateAnimeController);
animeRouter.delete("/anime/:id", deleteAnimeController);

export default animeRouter;

