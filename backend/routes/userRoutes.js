import express from "express";
const userRouter = express.Router()
import { registerUser, loginUser } from "../controllers/userController.js";
import { tryCatch } from "../utils/tryCatch.js";
userRouter.post("/user-registration", tryCatch(registerUser));
userRouter.post("/user-login", tryCatch(loginUser));

export default userRouter