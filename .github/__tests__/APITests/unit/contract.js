import {
  connectMemoryDB,
  dropMemoryDB,
} from "../../../../backend/utils/test-utils/mongoTestingDB.js";
import { createNewContract, archiveAContract, retrieveAllContracts, retrieveAllArchivedContracts } from "../../../../backend/services/contract.js";
import {
  incompleteContractInfo,
  fakeContractInfo,
} from "../../../../backend/utils/fixtures/fakeContract.js";

beforeEach(async () => {
  await connectMemoryDB();
});

afterEach(async () => {
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
  expect(newContract.rentalfeatures).toEqual(fakeContractInfo.rentalfeatures);
  expect(newContract).toBeInstanceOf(Object);
});

test("retreiveAllContracts method should return an array of all contracts", async () => {
  createNewContract(fakeContractInfo); 
  const contracts = await retrieveAllContracts()
   expect(contracts).toBeInstanceOf(Array)
   expect(contracts).toHaveLength(1)
})

test("retreiveAllArchivedContracts method should return an array of archived contracts", async () => {
  let newContract = await createNewContract(fakeContractInfo);
  archiveAContract(newContract)
  const contracts = await retrieveAllArchivedContracts()
  expect(contracts).toBeInstanceOf(Array)
  expect(contracts).toHaveLength(1)
})


