import {
  connectMemoryDB,
  dropMemoryDB,
} from "../../../backend/utils/test-utils/mongoTestingDB.js";
import { createNewContract } from "../../../backend/services/contract.js";
import { incompleteContractInfo, fakeContractInfo } from "../../../backend/utils/fixtures/fakeContract.js";
beforeAll(async () => {
  await connectMemoryDB();
});

afterAll(async () => {
  await dropMemoryDB();
});

test("createNewContract function show throw 'Booking contract input is incomplete!' error if booking contract form input is incomplete ", async () => {
  return expect(createNewContract(incompleteContractInfo)).rejects.toThrow(
    "Booking contract input is incomplete!"
  );
});

test("createNewContract function should create new contract", async () => {
    let newContract = await createNewContract(fakeContractInfo);
    expect(newContract.fname).toEqual(fakeContractInfo.fname);
    expect(newContract.rentalfeatures).toEqual(fakeContractInfo.rentalfeatures)
    expect(newContract).toBeInstanceOf(Object)
  });
