import { Router } from "express";
import {
  createFavoriteController,
  deleteFavoriteController,
  getAllFavoritesByUserIdController,
  updateFavoriteController,
} from "../controllers/favorites.controller.js";

const favoriteRouter = Router();

favoriteRouter.post("/favorite", createFavoriteController);
favoriteRouter.get("/favorites/:userid", getAllFavoritesByUserIdController);
favoriteRouter.patch("/favorite/:id", updateFavoriteController);
favoriteRouter.delete("/favorite/:id", deleteFavoriteController);

export default favoriteRouter;