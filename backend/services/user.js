import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import * as dotenv from "dotenv";
import { tokenGenerator } from "../utils/generators/tokenGenerator.js";
import { hashedPWGenerator } from "../utils/generators/hashedPasswordGenerator.js";
import {
  validateUserRegistrationInput,
  validateUserLoginInput,
} from "../utils/validation/inputValidation.js";
import {
  DUPLICATE_RESOURCE_ERROR,
  INCOMPLETE_INPUT_ERROR,
  WRONG_PASSWORD_ERROR,
  USER_DOES_NOT_EXIST_ERROR,
} from "../middleware/APIError.js";
import bcrypt from "bcryptjs";

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

  return newUser;
});

const authenticateUser = asyncHandler(async ({ email, password }) => {
  if (!email || !password) {
    throw new INCOMPLETE_INPUT_ERROR("Email and password required!");
  }

  validateUserLoginInput({ email, password });

  const user = await User.findOne({ email: email });

  if (!user) {
    throw new USER_DOES_NOT_EXIST_ERROR(`No user with that email exists!`);
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    throw new WRONG_PASSWORD_ERROR(
      "Your email password combination doesn't match our records!"
    );
  }

  return {
    email,
    password,
    token: tokenGenerator(user.id),
  };
});

export { createUser, authenticateUser };
