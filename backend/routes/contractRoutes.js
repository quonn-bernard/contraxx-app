import express from "express";
const contractRouter = express.Router()
import { createContract, updateContract } from "../controllers/contract.js";
import { tryCatch } from "../utils/tryCatch.js";

contractRouter.post("/", tryCatch(createContract))
contractRouter.put("/:id", tryCatch(updateContract))

export default contractRouter