import { Router } from "express";

import {
  createBookController,
  deleteBookController,
  getAllBooksController,
  updateBookController,
} from "../controllers/book.controller.js";

const bookRouter = Router();

bookRouter.post("/book", createBookController);
bookRouter.get("/book", getAllBooksController);
bookRouter.patch("/book/:id", updateBookController);
bookRouter.delete("/book/:id", deleteBookController);

export default bookRouter;
