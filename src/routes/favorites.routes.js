import { Router } from "express";
import {
  getAllFavoritesByUserIdController,
  createFavoriteController,
  deleteFavoriteController,
  updateFavoriteController,
} from "../controllers/favorites.controller.js";

const favoriteRouter = Router();

favoriteRouter.post("/favorite", createFavoriteController);
favoriteRouter.get("/favorites/:userid", getAllFavoritesByUserIdController);
favoriteRouter.patch("/favorite/:id", updateFavoriteController);
favoriteRouter.delete("/favorite/:id", deleteFavoriteController);

export default favoriteRouter;
