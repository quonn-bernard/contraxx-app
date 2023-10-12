import express from "express";
const userRouter = express.Router()
import { registerUser, loginUser } from "../controllers/userController.js";
import { createContract } from "../controllers/contract.js";
import { tryCatch } from "../utils/tryCatch.js";
userRouter.post("/user-registration", tryCatch(registerUser));
userRouter.post("/user-login", tryCatch(loginUser));
userRouter.post("/new-contract", tryCatch(createContract))
export default userRouter