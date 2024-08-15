import { prisma } from "../services/prisma.js";

export const createAnimeRepository = async (data) => {
    try {
        const anime = await prisma.anime.create({
            data: {
                title: data.title,
                description: data.description,
                releaseDate: new Date(data.releaseDate), // Converte a data para o formato Date
                episodes: data.episodes,
                genre: data.genre,
                rating: data.rating,
            },
            select: {
                id: true,
                title: true,
                description: true,
                releaseDate: true,
                episodes: true,
                genre: true,
                rating: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return anime;
    } catch (error) {
        console.error("Error creating anime:", error);
        throw new Error("Failed to create anime");
    }
};

export const getAllAnimesRepository = async () => {
    try {
        const animes = await prisma.anime.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                releaseDate: true,
                episodes: true,
                genre: true,
                rating: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return animes;
    } catch (error) {
        console.error("Error retrieving animes:", error);
        throw new Error("Failed to retrieve animes");
    }
};

export const getAnimeByIdRepository = async (id) => {
    try {
        const anime = await prisma.anime.findMany({
            where: { id },
            select: {
              id: true,
              title: true,
              description: true,
              releaseDate: true,
              episodes: true,
              genre: true,
              rating: true,
              createdAt: true,
              updatedAt: true,
            },
        });

        return anime;
    } catch (error) {
        console.error("Error retrieving anime:", error);
        throw new Error("Failed to retrieve anime");
    }
};

export const updateAnimeRepository = async (id, data) => {
    try {
        const updatedAnime = await prisma.anime.update({
            where: { id: Number(id) },
            data: {
                ...data,
                updatedAt: new Date(),
            },
            select: {
                id: true,
                title: true,
                description: true,
                releaseDate: true,
                episodes: true,
                genre: true,
                rating: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return updatedAnime;
    } catch (error) {
        console.error("Error updating anime:", error);
        throw new Error("Failed to update anime");
    }
};

export const deleteAnimeRepository = async (id) => {
    try {
        const deletedAnime = await prisma.anime.delete({
            where: { id: Number(id) },
            select: {
                id: true,
                title: true,
                description: true,
                releaseDate: true,
                episodes: true,
                genre: true,
                rating: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return deletedAnime;
    } catch (error) {
        console.error("Error deleting anime:", error);
        throw new Error("Failed to delete anime");
    }
};
