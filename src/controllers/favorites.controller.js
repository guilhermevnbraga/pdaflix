import {
    createFavoriteRepository,
    getAllFavoritesByUserIdRepository,
    updateFavoriteRepository,
    deleteFavoriteRepository,
} from "../repositories/favorites.repository.js";

export const createFavoriteController = async (req, res) => {
    try {
        const favorite = await createFavoriteRepository(Number(req.body));
        res.status(201).json(favorite);
    } catch (error) {
        console.error("Error in createFavoriteController:", error);
        res.status(400).json({ message: "Failed to create favorite", error: error.message });
    }
};

export const getAllFavoritesByUserIdController = async (req, res) => {
    try {
        const { userid } = req.params;
        const favorites = await getAllFavoritesByUserIdRepository(userid);
        res.status(200).json(favorites);
    } catch (error) {
        console.error("Error in getAllFavoritesController:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const updateFavoriteController = async (req, res) => {
    try {
        const { id } = req.params;
        const favoriteData = req.body;
        const updatedFavorite = await updateFavoriteRepository(Number(id), favoriteData);
        res.status(200).json(updatedFavorite);
    } catch (error) {
        console.error("Error in updateFavoriteController:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const deleteFavoriteController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFavorite = await deleteFavoriteRepository(Number(id));
        if (!deletedFavorite) {
            return res.status(404).json({ message: "Favorite not found" });
        }
        res.status(200).json({ message: "Favorite deleted successfully", favorite: deletedFavorite });
    } catch (error) {
        console.error("Error in deleteFavoriteController:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};