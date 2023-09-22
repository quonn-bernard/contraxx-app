import { createUser } from "../../../backend/services/user.js";
import { fakeuser, incompleteUserInput } from "../../../backend/utils/fixtures/fakeUser.js";
import {
  connectMemoryDB,
  dropMemoryDB,
} from "../../../backend/utils/test-utils/mongoTestingDB.js";

beforeAll(async () => {
  await connectMemoryDB();
});

afterAll(async () => {
  await dropMemoryDB();
});

//Tests user registration funcitonality via the createUser function

test("User service show throw 'Input not complete!' error if user registration form input is incomplete ", async () => {
  return expect(createUser(incompleteUserInput)).rejects.toThrow('Input not complete!')
});

test("User service should create new user", async () => {
  let newUser = await createUser(fakeuser);
  expect(newUser.fname).toEqual(fakeuser.fname);
});

test("User created with an email that already exists show throw a duplicate resource error", async () => {
  return expect(createUser(fakeuser)).rejects.toThrow('This email has already been used. Either try another email or login with this email')
});
