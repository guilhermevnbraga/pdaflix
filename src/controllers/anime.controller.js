import { createAnimeRepository, updateAnimeRepository, getAllAnimesRepository, deleteAnimeRepository } from "../repositories/anime.repository.js";

export const createAnimeController = async (req, res) => {
    try {
      const data = req.body;
  
      if (!data.title || !data.description || !data.releaseDate || !data.episodes || !data.genre || !data.rating) {
        return res.status(400).json({ message: "All fields (title, description, releaseDate, episodes, genre, rating) are required" });
      }
  
      const newAnime = await createAnimeRepository(data);
  
      return res.status(201).json(newAnime);
    } catch (error) {
      console.error("Error in createAnimeController:", error);
  
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  export const getAllAnimesController = async (req, res) => {
    try {
  
      const animes = await getAllAnimesRepository();
  
      return res.status(200).json(animes);
    } catch (error) {
      console.error("Error in getAllAnimesController:", error);
  
      return res.status(500).json({ message: "Internal server error" });
    }
  };
   
  export const updateAnimeController = async (req, res) => {
    try {
      const { id } = req.params; 
      const data = req.body;  
  
      if (!data.title && !data.description && !data.releaseDate && !data.episodes && !data.genre && !data.rating) {
        return res.status(400).json({ message: "At least one field (title, description, releaseDate, episodes, genre, rating) is required for update" });
      }
  
      const updatedAnime = await updateAnimeRepository(id, data);
      return res.status(200).json(updatedAnime);
    } catch (error) {
      console.error("Error in updateAnimeController:", error);
  
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  export const deleteAnimeController = async (req, res) => {
    try {
      const { id } = req.params;
      
      const deletedAnime = await deleteAnimeRepository(id);
  
      return res.status(200).json({ message: 'Anime deleted successfully', deletedAnime });
    } catch (error) {
      console.error("Error in deleteAnimeController:", error);
  
      return res.status(500).json({ message: "Internal server error" });
    }
  };