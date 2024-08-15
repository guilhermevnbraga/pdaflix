import { prisma } from "../services/prisma.js";

export const createFinishedRepository = async (data) => {
    try {
        const finisheds = await prisma.finished.create({
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

        return finisheds;
    } catch (error) {
        throw new Error("Failed to create finisheds");
    }
};

export const getAllFinishedsByUserIdRepository = async (userId) => {
    try {
        console.log(`Fetching finished items for user ID: ${userId}`);
        const finished = await prisma.finished.findMany({
            where: { user_id: userId },
            select: {
                id: true,
                user_id: true,
                item_id: true,
                item_type: true,
            },
        });

        console.log(`Finished items retrieved: ${JSON.stringify(finished)}`);
        return finished;
    } catch (error) {
        console.error("Error in getAllFinishedByUserIdRepository:", error);
        throw new Error("Failed to retrieve finished items");
    }
};

export const updateFinishedRepository = async (id, data) => {
    try {
        const updatedFinished = await prisma.finished.update({
            where: { id },
            data,
            select: {
                id: true,
                user_id: true,
                item_id: true,
                item_type: true,
            },
        });

        return updatedFinished;
    } catch (error) {
        throw new Error("Failed to update finisheds");
    }
};

export const deleteFinishedRepository = async (id) => {
    try {
        const deletedFinished = await prisma.finished.delete({
            where: { id },
            select: {
                id: true,
                user_id: true,
                item_id: true,
                item_type: true,
            },
        });

        return deletedFinished;
    } catch (error) {
        throw new Error("Failed to delete finisheds");
    }
};
