import { prisma } from "../services/prisma.js";

export const createMangaRepository = async (data) => {
    try {
        const manga = await prisma.manga.create({
            data: {
                title: data.title,
                description: data.description,
                author: data.author,
                releaseDate: new Date(data.releaseDate),
                volumeNumber: data.volumeNumber,
                genre: data.genre,
                rating: data.rating,
                onGoing: data.onGoing,
                releaseFrequency: data.releaseFrequency,
            },
            select: {
                title: true,
                description: true,
                author: true,
                releaseDate: true,
                volumeNumber: true,
                genre: true,
                rating: true,
                onGoing: true,
                releaseFrequency: true,
            },
        });

        return manga;
    } catch (error) {
        console.error("Error creating manga:", error);
        throw new Error("Failed to create manga");
    }
};

export const getAllMangasRepository = async () => {
    try {
        const mangas = await prisma.manga.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                author: true,
                releaseDate: true,
                volumeNumber: true,
                genre: true,
                rating: true,
                onGoing: true,
                releaseFrequency: true,
            },
        });

        return mangas;
    } catch (error) {
        console.error("Error retrieving mangas:", error);
        throw new Error("Failed to retrieve mangas");
    }
};

export const getMangaByIdRepository = async (id) => {
    try {
        const manga = await prisma.manga.findMany({
            where: { id },
            select: {
                id: true,
                title: true,
                description: true,
                author: true,
                releaseDate: true,
                volumeNumber: true,
                genre: true,
                rating: true,
                onGoing: true,
                releaseFrequency: true,
            },
        });

        return manga;
    } catch (error) {
        console.error("Error retrieving manga:", error);
        throw new Error("Failed to retrieve manga");
    }
};

export const updateMangaRepository = async (id, data) => {
    try {
        const updatedManga = await prisma.manga.update({
            where: { id },
            data,
            select: {
                id: true,
                title: true,
                description: true,
                author: true,
                releaseDate: true,
                volumeNumber: true,
                genre: true,
                rating: true,
                onGoing: true,
                releaseFrequency: true,
            },
        });

        return updatedManga;
    } catch (error) {
        console.error("Error updating manga:", error);
        throw new Error("Failed to update manga");
    }
};

export const deleteMangaRepository = async (id) => {
    try {
        const deletedManga = await prisma.manga.delete({
            where: { id },
            select: {
                id: true,
                title: true,
                description: true,
                author: true,
            },
        });

        return deletedManga;
    } catch (error) {
        console.error("Error deleting manga:", error);
        throw new Error("Failed to delete manga");
    }
};
