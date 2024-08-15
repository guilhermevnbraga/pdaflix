import { prisma } from "../services/prisma.js";

export const createMangaRepository = async (data) => {
    try {
        const manga = await prisma.manga.create({
            data: {
                title: data.title,
                description: data.description,
                author: data.author,
                releaseDate: new Date(data.releaseDate),
                pageNumber: data.pageNumber,
                genre: data.genre,
                rating: data.rating,
            },
            select: {
                title: true,
                description: true,
                author: true,
                releaseDate: true,
                pageNumber: true,
                genre: true,
                rating: true,
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
                pageNumber: true,
                genre: true,
                rating: true,
            },
        });

        return mangas;
    } catch (error) {
        console.error("Error retrieving mangas:", error);
        throw new Error("Failed to retrieve mangas");
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
                pageNumber: true,
                genre: true,
                rating: true,
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
            },
        });

        return deletedManga;
    } catch (error) {
        console.error("Error deleting manga:", error);
        throw new Error("Failed to delete manga");
    }
};
