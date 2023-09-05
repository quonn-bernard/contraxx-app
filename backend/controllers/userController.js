import asyncHandler from "express-async-handler";
import { createUserService } from "../services/userService.js";
import * as dotenv from "dotenv";
dotenv.config();

const registerUser = asyncHandler(async (req, res, next) => {

   createUserService(req, res, next);
   
});

export { registerUser };
