import asyncHandler from "express-async-handler";
import Contract from "../models/contractModel.js";
import * as dotenv from "dotenv";
import {
  INCOMPLETE_INPUT_ERROR,
} from "../middleware/APIError.js";
import { validateContractInput } from "../utils/validation/inputValidation.js";

dotenv.config();



const createNewContract = asyncHandler(async ({fname,
    lname,
    eventtype,
    rentalfeatures,
    bookingdate,
    bookingtime,
    bookingduration,
    bookingaddress}) => {
    const contractProperties = {
        fname,
        lname,
        eventtype,
        rentalfeatures,
        bookingdate,
        bookingtime,
        bookingduration,
        bookingaddress,
      };
  if (
    !fname ||
    !lname ||
    !eventtype ||
    !rentalfeatures ||
    !bookingdate ||
    !bookingtime ||
    !bookingduration ||
    !bookingaddress
  ) {
    throw new INCOMPLETE_INPUT_ERROR("Booking contract input is incomplete!");
  }

  validateContractInput(contractProperties);

  const newContract = await Contract.create(contractProperties);

  return newContract;
});

const updateAContract = asyncHandler(async (id, {fname,
    lname,
    eventtype,
    rentalfeatures,
    bookingdate,
    bookingtime,
    bookingduration,
    bookingaddress}) => {
  return await Contract.findByIdAndUpdate({ _id: id }, {fname,
    lname,
    eventtype,
    rentalfeatures,
    bookingdate,
    bookingtime,
    bookingduration,
    bookingaddress}, {
    new: true,
  });
});

export { createNewContract, updateAContract };
