import {
    createFinishedRepository,
    getAllFinishedsByUserIdRepository,
    updateFinishedRepository,
    deleteFinishedRepository,
} from "../repositories/finisheds.repository.js";

export const createFinishedController = async (req, res) => {
    try {
        const finished = await createFinishedRepository(req.body);
        res.status(201).json(finished);
    } catch (error) {
        console.error("Error in createFinishedController:", error);
        res.status(400).json({ message: "Failed to create finished", error: error.message });
    }
};

export const getAllFinishedsByUserIdController = async (req, res) => {
    try {
        const { userid } = req.params;
        const finisheds = await getAllFinishedsByUserIdRepository(userid);
        res.status(200).json(finisheds);
    } catch (error) {
        console.error("Error in getAllFinishedsController:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const updateFinishedController = async (req, res) => {
    try {
        const { id } = req.params;
        const finishedData = req.body;
        const updatedFinished = await updateFinishedRepository(Number(id), finishedData);
        res.status(200).json(updatedFinished);
    } catch (error) {
        console.error("Error in updateFinishedController:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const deleteFinishedController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFinished = await deleteFinishedRepository(Number(id));
        if (!deletedFinished) {
            return res.status(404).json({ message: "Finished not found" });
        }
        res.status(200).json({ message: "Finished deleted successfully", finished: deletedFinished });
    } catch (error) {
        console.error("Error in deleteFinishedController:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};