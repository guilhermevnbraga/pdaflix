import { createUserRepository } from "../repositories/user.repository.js";

export const createUserController = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
      }
  
      const user = await createUserRepository({ name, email, password });
  
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error in createUserController:", error);
  
      if (error.message.includes("Unique constraint failed on the fields: (`email`)")) {
        return res.status(409).json({ message: "Email already in use" });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }; 