import express, { urlencoded } from "express";
import cors from "cors";
import movieRouter from "./routes/movie.routes.js";
import userRouter from "./routes/user.routes.js";
import animeRouter from "./routes/anime.routes.js";
import seriesRouter from "./routes/series.routes.js";
import bookRouter from "./routes/book.routes.js";
import mangaRouter from "./routes/manga.routes.js";
import favoriteRouter from "./routes/favorites.routes.js";
import finishedRouter from "./routes/finished.routes.js";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(movieRouter);
app.use(userRouter);
app.use(animeRouter);
app.use(seriesRouter);
app.use(bookRouter);
app.use(mangaRouter);
app.use(favoriteRouter);
app.use(finishedRouter);

export default app;
