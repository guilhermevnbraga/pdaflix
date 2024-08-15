import {
  createUserRepository,
  getAllUsersRepository,
  updateUserRepository,
  deleteUserRepository,
} from "../repositories/user.repository.js";

export const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const user = await createUserRepository({ name, email, password });

    return res.status(201).json(user);
  } catch (error) {
    console.error("Error in createUserController:", error);

    if (
      error.message.includes(
        "Unique constraint failed on the fields: (`email`)"
      )
    ) {
      return res.status(409).json({ message: "Email already in use" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsersRepository();

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error in getAllUsersController:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const data = req.body;

    if (!data.name && !data.email && !data.password) {
      return res.status(400).json({
        message:
          "At least one field (name, email, or password) is required to update",
      });
    }

    const updatedUser = await updateUserRepository(userId, data);

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error in updateUserController:", error);

    if (error.message.includes("Record to update not found")) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await deleteUserRepository(userId);

    return res.status(200).json(deletedUser);
  } catch (error) {
    console.error("Error in deleteUserController:", error);

    if (error.message.includes("Record to delete not found")) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};
