import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import * as dotenv from "dotenv";
import tokenGenerator from "../utils/generators/tokenGenerator.js";
import { hashedPWGenerator } from "../utils/generators/hashedPasswordGenerator.js";
import { validateUserRegistrationInput } from "../utils/validation/inputValidation.js";
import { APIError } from "../middleware/APIError.js";
import { DUPLICATE_EMAIL, INCOMPLETE_INPUT } from "../constants/errorCodes.js";

dotenv.config();

const createUserService = asyncHandler(async (req, res, next) => {
  const { fname, lname, email, password } = req.body;
  if (!fname || !lname || !email || !password) {
    throw new APIError(INCOMPLETE_INPUT, "Input not complete!", 400);
  }

  const existingUser = await User.find({ email: email });
  if (existingUser.length !== 0) {
    throw new APIError(
      DUPLICATE_EMAIL,
      "This email has already been used. Either try another email or login with this email",
      403
    );
  }

  validateUserRegistrationInput({ fname, lname, email, password });

  try {
    const newUser = await User.create({
      fname,
      lname,
      email,
      password: await hashedPWGenerator(password),
    });
    if (!newUser) throw new Error("Error while creating new user!");
    res.status(201).json({
      _id: newUser.id,
      email: newUser.email,
      token: tokenGenerator(newUser.id),
    });
  } catch (error) {
    next(error);
  }
});

export { createUserService };
