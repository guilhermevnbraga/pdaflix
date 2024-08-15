import { prisma } from "../services/prisma.js";

export const createSeriesRepository = async (data) => {
  try {
    const series = await prisma.series.create({
      data: {
        title: data.title,
        description: data.description,
        releaseDate: new Date(data.releaseDate),
        seasons: data.seasons,
        genre: data.genre,
        rating: data.rating,
      },
      select: {
        id: true,
        title: true,
        description: true,
        releaseDate: true,
        seasons: true,
        genre: true,
        rating: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return series;
  } catch (error) {
    console.error("Error creating series:", error);
    throw new Error("Failed to create series");
  }
};

export const getAllSeriesRepository = async () => {
  try {
    const series = await prisma.series.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        releaseDate: true,
        seasons: true,
        genre: true,
        rating: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return series;
  } catch (error) {
    console.error("Error fetching all series:", error);
    throw new Error("Failed to fetch series");
  }
};

export const updateSeriesRepository = async (id, data) => {
  try {
    const updatedSeries = await prisma.series.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        releaseDate: new Date(data.releaseDate),
        seasons: data.seasons,
        genre: data.genre,
        rating: data.rating,
      },
      select: {
        id: true,
        title: true,
        description: true,
        releaseDate: true,
        seasons: true,
        genre: true,
        rating: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updatedSeries;
  } catch (error) {
    console.error("Error updating series:", error);
    throw new Error("Failed to update series");
  }
};

export const deleteSeriesRepository = async (id) => {
  try {
    const deletedSeries = await prisma.series.delete({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        releaseDate: true,
        seasons: true,
        genre: true,
    },
});

return deletedSeries;
} catch (error) {
console.error("Error deleting series:", error);
throw new Error("Failed to delete series");
}
};