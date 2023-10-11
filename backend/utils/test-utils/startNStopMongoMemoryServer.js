import {
  connectMemoryDB,
  dropMemoryDB,
} from "../../../backend/utils/test-utils/mongoTestingDB.js";

const startStopMemoryServer = () => {
  beforeAll(async () => {
    await connectMemoryDB();
  });

  afterAll(async () => {
    await dropMemoryDB();
  });
};

export { startStopMemoryServer };
