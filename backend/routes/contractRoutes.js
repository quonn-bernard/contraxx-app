import express from "express";
import { createContract, updateContract, archiveContract, getContracts, getArchivedContracts } from "../controllers/contract.js";
import { tryCatch } from "../utils/tryCatch.js";
const contractRouter = express.Router()

contractRouter.post("/", tryCatch(createContract))
contractRouter.put("/:id", tryCatch(updateContract))
contractRouter.delete("/archive/:id", tryCatch(archiveContract))
contractRouter.get("/", tryCatch(getContracts))
contractRouter.get("/archived", tryCatch(getArchivedContracts))

export default contractRouter