import asyncHandler from "express-async-handler";
import * as dotenv from "dotenv";
import { createNewContract } from "../services/contract.js";
import { updateAContract, archiveAContract } from "../services/contract.js";
import Contract from "../models/contractModel.js";
import ArchivedContract from "../models/archivedContractModel.js";
dotenv.config();

const createContract = asyncHandler(async (req, res, next) => {
  const {
    fname,
    lname,
    eventtype,
    rentalfeatures,
    bookingdate,
    bookingtime,
    bookingduration,
    bookingaddress,
  } = req.body;

  try {
    const contract = await createNewContract({
      fname,
      lname,
      eventtype,
      rentalfeatures,
      bookingdate,
      bookingtime,
      bookingduration,
      bookingaddress,
    });
    res.status(201).json(contract);
  } catch (error) {
    next(error);
  }
});

const updateContract = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const existingContract = await Contract.findById(id);
  if (!existingContract)
    res.status(404).json({ message: `Contract not found!` });
  try {
    const updatedContract = await updateAContract(id, req.body);
    res.status(200).json(updatedContract);
  } catch (error) {
    next(error);
  }
});

const archiveContract = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const existingContract = await Contract.findById(id);
  if (!existingContract)
    res.status(404).json({ message: `Contract not found!` });
  try {
    archiveAContract(existingContract)
    res.status(200).json(archiveContract);
  } catch (error) {
    next(error);
  }
});

export { createContract, updateContract, archiveContract };
