import { createMovieRepository } from "../repositories/movie.repository.js";

export const createMovieController = async (req, res) => {
  try {
    const movie = await createMovieRepository(req.body);
    console.log(movie);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};
