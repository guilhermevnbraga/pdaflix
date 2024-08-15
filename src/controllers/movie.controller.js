import {
  createMovieRepository,
  getAllMoviesRepository,
  updateMovieRepository,
  deleteMovieRepository,
} from "../repositories/movie.repository.js";

export const createMovieController = async (req, res) => {
  try {
    const movie = await createMovieRepository(req.body);
    console.log(movie);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllMoviesController = async (req, res) => {
  try {
    const movies = await getAllMoviesRepository();

    return res.status(200).json(movies);
  } catch (error) {
    console.error("Error in getAllMoviesController:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateMovieController = async (req, res) => {
  try {
    const { id } = req.params;
    const movieData = req.body;

    const updatedMovie = await updateMovieRepository(Number(id), movieData);

    return res.status(200).json(updatedMovie);
  } catch (error) {
    console.error("Error in updateMovieController:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteMovieController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMovie = await deleteMovieRepository(Number(id));

    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res
      .status(200)
      .json({ message: "Movie deleted successfully", movie: deletedMovie });
  } catch (error) {
    console.error("Error in deleteMovieController:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};
