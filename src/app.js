import express, { urlencoded } from "express";
import cors from "cors";
import movieRouter from "./routes/movie.routes.js";
import userRouter from "./routes/user.routes.js";
import animeRouter from "./routes/anime.routes.js";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(movieRouter);
app.use(userRouter);
app.use(animeRouter);

export default app;
