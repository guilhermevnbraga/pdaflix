import { prisma } from "../services/prisma.js";

export const createMovie = async (data) => {
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
