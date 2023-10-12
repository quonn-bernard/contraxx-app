import asyncHandler from "express-async-handler";
import Contract from "../models/contractModel.js";
import * as dotenv from "dotenv";
import {
  DUPLICATE_RESOURCE_ERROR,
  INCOMPLETE_INPUT_ERROR,
  WRONG_PASSWORD_ERROR,
  USER_DOES_NOT_EXIST_ERROR,
} from "../middleware/APIError.js";

dotenv.config();

const createNewContract = asyncHandler(
  async ({
    fname,
    lname,
    eventtype,
    rentalfeatures,
    bookingdate,
    bookingtime,
    bookingduration,
    bookingaddress,
  }) => {
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

    validateContractInput({
      fname,
      lname,
      eventtype,
      rentalfeatures,
      bookingdate,
      bookingtime,
      bookingduration,
      bookingaddress,
    });
    
    const newContract = await Contract.create({
      fname,
      lname,
      eventtype,
      rentalfeatures,
      bookingdate,
      bookingtime,
      bookingduration,
      bookingaddress,
    });

    return newContract;
  }
);

export { createNewContract };
