import asyncHandler from "express-async-handler";
import Contract from "../models/contractModel.js";
import ArchivedContract from "../models/archivedContractModel.js";
import * as dotenv from "dotenv";
import { ObjectId } from "mongodb";
import { INCOMPLETE_INPUT_ERROR } from "../middleware/APIError.js";
import { validateContractInput } from "../utils/validation/inputValidation.js";

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
  }
);

const updateAContract = asyncHandler(
  async (
    id,
    input
  ) => {
    const newContract = await Contract.findByIdAndUpdate(
      { _id: id },
      input,
      {
        new: true,
      }
    );
    return newContract
  }
);

const archiveAContract = asyncHandler(async (existingContract) => {
  const newDoc = Object.assign({}, existingContract);
  delete newDoc._id;
  newDoc.fname = existingContract.fname;
  newDoc.lname = existingContract.lname;
  newDoc.eventtype = existingContract.eventtype;
  newDoc.rentalfeatures = existingContract.rentalfeatures;
  newDoc.bookingdate = existingContract.bookingdate;
  newDoc.bookingtime = existingContract.bookingtime;
  newDoc.bookingduration = existingContract.bookingduration;
  newDoc.bookingaddress = existingContract.bookingaddress;
  newDoc._id = new ObjectId();
  ArchivedContract.create(newDoc);
  await Contract.deleteOne({ _id: existingContract._id });
});

const retrieveAllContracts = asyncHandler(async () => {
  const contracts = await Contract.find();
  return contracts;
});

const retrieveAllArchivedContracts = asyncHandler(async () => {
  const contracts = await ArchivedContract.find();
  return contracts;
});

export {
  createNewContract,
  updateAContract,
  archiveAContract,
  retrieveAllContracts,
  retrieveAllArchivedContracts,
};
