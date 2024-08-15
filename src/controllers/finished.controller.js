import {
    createFinishedRepository,
    getAllFinishedsByUserIdRepository,
    updateFinishedRepository,
    deleteFinishedRepository,
} from "../repositories/finished.repository.js";

import { getAnimeByIdRepository } from "../repositories/anime.repository.js";
import { getSeriesByIdRepository } from "../repositories/series.repository.js";
import { getMovieByIdRepository } from "../repositories/movie.repository.js";
import { getBookByIdRepository } from "../repositories/book.repository.js";
import { getMangaByIdRepository } from "../repositories/manga.repository.js";

export const createFinishedController = async (req, res) => {
    try {
        const { item_type } = req.body;
        let exists = false;
        switch (item_type) {
            case "anime":
                const anime = await getAnimeByIdRepository(req.body.item_id);
                if (anime.length > 0) exists = true;
                break;
            case "series":
                const series = await getSeriesByIdRepository(req.body.item_id);
                if (series.length > 0) exists = true;
                break;
            case "movie":
                const movie = await getMovieByIdRepository(req.body.item_id);
                if (movie.length > 0) exists = true;
                break;
            case "book":
                const book = await getBookByIdRepository(req.body.item_id);
                console.log(book);
                if (book.length > 0) exists = true;
                break;
            case "manga":
                const manga = await getMangaByIdRepository(req.body.item_id);
                if (manga.length > 0) exists = true;
                break;
            default:
                throw new Error("Invalid item type");
        }
        if (!exists)
            res.status(400).json({
                message: "Item not found",
            });
        const finished = await createFinishedRepository(req.body);
        res.status(201).json(finished);
    } catch (error) {
        console.error("Error in createFinishedController:", error);
        res.status(400).json({
            message: "Failed to create finished",
            error: error.message,
        });
    }
};

export const getAllFinishedsByUserIdController = async (req, res) => {
    try {
        const { userid } = req.params;
        const finisheds = await getAllFinishedsByUserIdRepository(
            Number(userid)
        );
        res.status(200).json(finisheds);
    } catch (error) {
        console.error("Error in getAllFinishedsController:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

export const updateFinishedController = async (req, res) => {
    try {
        const { id } = req.params;
        const finishedData = req.body;
        const updatedFinished = await updateFinishedRepository(
            Number(id),
            finishedData
        );
        res.status(200).json(updatedFinished);
    } catch (error) {
        console.error("Error in updateFinishedController:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

export const deleteFinishedController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFinished = await deleteFinishedRepository(Number(id));
        if (!deletedFinished) {
            return res.status(404).json({ message: "Finished not found" });
        }
        res.status(200).json({
            message: "Finished deleted successfully",
            finished: deletedFinished,
        });
    } catch (error) {
        console.error("Error in deleteFinishedController:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};
