import express, { urlencoded } from "express";
import cors from "cors";
import movieRouter from "./routes/movie.routes.js";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(movieRouter);

export default app;
