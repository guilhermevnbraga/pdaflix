import { prisma } from "../services/prisma.js";

export const createBookRepository = async (data) => {
  try {
    const book = await prisma.book.create({
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

    return book;
  } catch (error) {
    console.error("Error creating book:", error);
    throw new Error("Failed to create book");
  }
};

export const getAllBooksRepository = async () => {
  try {
    const books = await prisma.book.findMany({
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

    return books;
  } catch (error) {
    console.error("Error retrieving books:", error);
    throw new Error("Failed to retrieve books");
  }
};


export const getBookByIdRepository = async (id) => {
  try {
    const book = await prisma.book.findMany({
      where: { id },
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

    return book;
  } catch (error) {
    console.error("Error retrieving book:", error);
    throw new Error("Failed to retrieve book");
  }
};

export const updateBookRepository = async (id, data) => {
  try {
    const updatedBook = await prisma.book.update({
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

    return updatedBook;
  } catch (error) {
    console.error("Error updating book:", error);
    throw new Error("Failed to update book");
  }
};

export const deleteBookRepository = async (id) => {
  try {
    const deletedBook = await prisma.book.delete({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
      },
    });

    return deletedBook;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw new Error("Failed to delete book");
  }
};
