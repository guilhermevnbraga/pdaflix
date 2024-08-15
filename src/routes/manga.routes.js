import { Router } from "express";

import {
  createMangaController,
  deleteMangaController,
  getAllMangasController,
  updateMangaController,
} from "../controllers/manga.controller.js";

const mangaRouter = Router();

mangaRouter.post("/manga", createMangaController);
mangaRouter.get("/manga", getAllMangasController);
mangaRouter.patch("/manga/:id", updateMangaController);
mangaRouter.delete("/manga/:id", deleteMangaController);

export default mangaRouter;
