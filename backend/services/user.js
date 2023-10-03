import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import * as dotenv from "dotenv";
import { tokenGenerator } from "../utils/generators/tokenGenerator.js";
import { hashedPWGenerator } from "../utils/generators/hashedPasswordGenerator.js";
import { validateUserRegistrationInput } from "../utils/validation/inputValidation.js";
import {
  DUPLICATE_RESOURCE_ERROR,
  INCOMPLETE_INPUT_ERROR,
} from "../middleware/APIError.js";

dotenv.config();

const createUser = asyncHandler(async ({ fname, lname, email, password }) => {
  if (!fname || !lname || !email || !password) {
    throw new INCOMPLETE_INPUT_ERROR("Input not complete!");
  }

  const existingUser = await User.find({ email: email });
  if (existingUser.length !== 0) {
    throw new DUPLICATE_RESOURCE_ERROR(
      "This email has already been used. Either try another email or login with this email"
    );
  }

  validateUserRegistrationInput({ fname, lname, email, password });

    const newUser = await User.create({
      fname,
      lname,
      email,
      password: await hashedPWGenerator(password),
    });
    if (!newUser) throw new Error("Error while creating new user!");

    return newUser
  
});

export { createUser };
