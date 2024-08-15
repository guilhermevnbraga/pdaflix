import { prisma } from "../services/prisma.js";
import bcrypt from "bcrypt";

export const createUserRepository = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

export const getAllUsersRepository = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return users;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw new Error("Failed to retrieve users");
  }
};

export const updateUserRepository = async (id, data) => {
  try {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};

export const deleteUserRepository = async (id) => {
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: Number(id) },
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });
  
      return deletedUser;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Failed to delete user");
    }
  };