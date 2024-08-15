import { prisma } from "../services/prisma.js";

export const createFavoriteRepository = async (data) => {
    try {
        const favorites = await prisma.favorite.create({
            data: {
                user_id: data.user_id,
                item_id: data.item_id,
                item_type: data.item_type,
            },
            select: {
                user_id: true,
                item_id: true,
                item_type: true,
            },
        });

        return favorites;
    } catch (error) {
        throw new Error("Failed to create favorites");
    }
};

export const getAllFavoritesByUserIdRepository = async (userId) => {
    try {
        const favorites = await prisma.favorite.findMany({
            where: { user_id: userId },
            select: {
                id: true,
                user_id: true,
                item_id: true,
                item_type: true,
            },
        });

        return favorites;
    } catch (error) {
        throw new Error("Failed to retrieve favorites");
    }
};

export const updateFavoriteRepository = async (id, data) => {
    try {
        const updatedFavorite = await prisma.favorite.update({
            where: { id },
            data,
            select: {
                id: true,
                user_id: true,
                item_id: true,
                item_type: true,
            },
        });

        return updatedFavorite;
    } catch (error) {
        throw new Error("Failed to update favorites");
    }
};

export const deleteFavoriteRepository = async (id) => {
    try {
        const deletedFavorite = await prisma.favorite.delete({
            where: { id },
            select: {
                id: true,
                user_id: true,
                item_id: true,
                item_type: true,
            },
        });

        return deletedFavorite;
    } catch (error) {
        throw new Error("Failed to delete favorites");
    }
};
