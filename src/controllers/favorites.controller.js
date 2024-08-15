import {
    createFavoriteRepository,
    getAllFavoritesByUserIdRepository,
    updateFavoriteRepository,
    deleteFavoriteRepository,
} from "../repositories/favorites.repository.js";

import { getAnimeByIdRepository } from "../repositories/anime.repository.js";
import { getSeriesByIdRepository } from "../repositories/series.repository.js";
import { getMovieByIdRepository } from "../repositories/movie.repository.js";
import { getBookByIdRepository } from "../repositories/book.repository.js";
import { getMangaByIdRepository } from "../repositories/manga.repository.js";

export const createFavoriteController = async (req, res) => {
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
        const favorite = await createFavoriteRepository(Number(req.body));
        res.status(201).json(favorite);
    } catch (error) {
        console.error("Error in createFavoriteController:", error);
        res.status(400).json({
            message: "Failed to create favorite",
            error: error.message,
        });
    }
};

export const getAllFavoritesByUserIdController = async (req, res) => {
    try {
        console.log("hello");
        const { userid } = req.params;
        console.log(req.params);
        const favorites = await getAllFavoritesByUserIdRepository(
            Number(userid)
        );
        res.status(200).json(favorites);
    } catch (error) {
        console.error("Error in getAllFavoritesController:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

export const updateFavoriteController = async (req, res) => {
    try {
        const { id } = req.params;
        const favoriteData = req.body;
        const updatedFavorite = await updateFavoriteRepository(
            Number(id),
            favoriteData
        );
        res.status(200).json(updatedFavorite);
    } catch (error) {
        console.error("Error in updateFavoriteController:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

export const deleteFavoriteController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFavorite = await deleteFavoriteRepository(Number(id));
        if (!deletedFavorite) {
            return res.status(404).json({ message: "Favorite not found" });
        }
        res.status(200).json({
            message: "Favorite deleted successfully",
            favorite: deletedFavorite,
        });
    } catch (error) {
        console.error("Error in deleteFavoriteController:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};
