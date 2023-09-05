import express from "express";
const userRouter = express.Router()
import { registerUser } from "../controllers/userController.js";
import { tryCatch } from "../utils/tryCatch.js";

userRouter.post("/user-registration", tryCatch(registerUser));

export default userRouter