import express from "express";
const userRouter = express.Router()
import { registerUser, loginUser } from "../controllers/user.js";
import { createContract } from "../controllers/contract.js";
import { tryCatch } from "../utils/tryCatch.js";
userRouter.post("/registration", tryCatch(registerUser));
userRouter.post("/login", tryCatch(loginUser));

export default userRouter