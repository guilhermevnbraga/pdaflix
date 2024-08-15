import {
    createMangaRepository,
    getAllMangasRepository,
    getMangaByIdRepository,
    updateMangaRepository,
    deleteMangaRepository,
} from "../repositories/manga.repository.js";

export const createMangaController = async (req, res) => {
    try {
        const manga = await createMangaRepository(req.body);
        console.log(manga);
        res.status(201).json(manga);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getAllMangasController = async (req, res) => {
    try {
        const mangas = await getAllMangasRepository();

        return res.status(200).json(mangas);
    } catch (error) {
        console.error("Error in getAllMangasController:", error);

        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getMangaByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const animes = await getMangaByIdRepository(id);
  
      return res.status(200).json(animes);
    } catch (error) {
      console.error("Error in getMangaById:", error);
  
      return res.status(500).json({ message: "Internal server error" });
    }
  };

export const updateMangaController = async (req, res) => {
    try {
        const { id } = req.params;
        const mangaData = req.body;

        const updatedManga = await updateMangaRepository(Number(id), mangaData);

        return res.status(200).json(updatedManga);
    } catch (error) {
        console.error("Error in updateMangaController:", error);

        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteMangaController = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedManga = await deleteMangaRepository(Number(id));

        if (!deletedManga) {
            return res.status(404).json({ message: "Manga not found" });
        }

        return res
            .status(200)
            .json({ message: "Manga deleted successfully", manga: deletedManga });
    } catch (error) {
        console.error("Error in deleteMangaController:", error);

        return res.status(500).json({ message: "Internal server error" });
    }
};
