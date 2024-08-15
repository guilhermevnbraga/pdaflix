import { prisma } from "../services/prisma.js";

export const createMovieRepository = async (data) => {
  try {
    const movie = await prisma.movie.create({
      data: {
        title: data.title,
        description: data.description,
        releaseDate: new Date(data.releaseDate),
        duration: data.duration,
        genre: data.genre,
        rating: data.rating,
      },
      select: {
        title: true,
        description: true,
        releaseDate: true,
        duration: true,
        genre: true,
        rating: true,
      },
    });

    return movie;
  } catch (error) {
    console.error("Error creating movie:", error);
    throw new Error("Failed to create movie");
  }
};

export const getAllMoviesRepository = async () => {
  try {
    const movies = await prisma.movie.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        releaseDate: true,
        duration: true,
        genre: true,
        rating: true,
      },
    });

    return movies;
  } catch (error) {
    console.error("Error retrieving movies:", error);
    throw new Error("Failed to retrieve movies");
  }
};

export const updateMovieRepository = async (id, data) => {
  try {
    const updatedMovie = await prisma.movie.update({
      where: { id },
      data,
      select: {
        id: true,
        title: true,
        description: true,
        releaseDate: true,
        duration: true,
        genre: true,
        rating: true,
      },
    });

    return updatedMovie;
  } catch (error) {
    console.error("Error updating movie:", error);
    throw new Error("Failed to update movie");
  }
};

export const deleteMovieRepository = async (id) => {
  try {
    const deletedMovie = await prisma.movie.delete({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
      },
    });

    return deletedMovie;
  } catch (error) {
    console.error("Error deleting movie:", error);
    throw new Error("Failed to delete movie");
  }
};
