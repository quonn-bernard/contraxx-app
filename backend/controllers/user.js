import asyncHandler from "express-async-handler";
import { createUser } from "../services/user.js";
import { authenticateUser } from "../services/user.js";
import * as dotenv from "dotenv";
dotenv.config();

const registerUser = asyncHandler(async (req, res, next) => {
  const { fname, lname, email, password } = req.body;

  try {
    const user = await createUser({ fname, lname, email, password });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await authenticateUser({ email, password });
    res.status(200).json(user);
  } catch (error) {
    next(error)
  }
});

export { registerUser, loginUser };
