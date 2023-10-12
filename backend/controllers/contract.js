import asyncHandler from "express-async-handler";
import * as dotenv from "dotenv";
import { createNewContract } from "../services/contract.js";
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

export { createContract };
