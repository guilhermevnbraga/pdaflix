import express, { urlencoded } from "express";
import cors from "cors";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

export default app;
