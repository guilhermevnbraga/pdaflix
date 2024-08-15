import {
    createBookRepository,
    getAllBooksRepository,
    updateBookRepository,
    deleteBookRepository,
} from "../repositories/book.repository.js";

export const createBookController = async (req, res) => {
    try {
        const book = await createBookRepository(req.body);
        console.log(book);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getAllBooksController = async (req, res) => {
    try {
        const books = await getAllBooksRepository();

        return res.status(200).json(books);
    } catch (error) {
        console.error("Error in getAllBooksController:", error);

        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateBookController = async (req, res) => {
    try {
        const { id } = req.params;
        const bookData = req.body;

        const updatedBook = await updateBookRepository(Number(id), bookData);

        return res.status(200).json(updatedBook);
    } catch (error) {
        console.error("Error in updateBookController:", error);

        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteBookController = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBook = await deleteBookRepository(Number(id));

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res
            .status(200)
            .json({ message: "Book deleted successfully", book: deletedBook });
    } catch (error) {
        console.error("Error in deleteBookController:", error);

        return res.status(500).json({ message: "Internal server error" });
    }
};
