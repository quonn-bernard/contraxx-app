import { createUser } from "../../../../backend/services/user.js";
import {
  connectMemoryDB,
  dropMemoryDB,
} from "../../../../backend/utils/test-utils/mongoTestingDB.js";
import { authenticateUser } from "../../../../backend/services/user.js";
import {
  incompleteUserInput,
  missingInput,
  wrongPassword,
  correctPassword,
  correctEmail,
  wrongEmail,
  fakeuser
} from "../../../../backend/utils/fixtures/fakeUser.js";

beforeAll(async () => {
  await connectMemoryDB();
});

afterAll(async () => {
  await dropMemoryDB();
});

//Tests user registration funcitonality via the createUser function

test("User service show throw 'Input not complete!' error if user registration form input is incomplete ", async () => {
  return expect(createUser(incompleteUserInput)).rejects.toThrow(
    "Input not complete!"
  );
});

test("User service should create new user", async () => {
  let newUser = await createUser(fakeuser);
  expect(newUser.fname).toEqual(fakeuser.fname);
});

test("User created with an email that already exists show throw a duplicate resource error", async () => {
  return expect(createUser(fakeuser)).rejects.toThrow(
    "This email has already been used. Either try another email or login with this email"
  );
});

//Tests user login funcitonality via the authenticateUser function

test("AuthenticateUser function should throw proper error message if non-existant email address is entered", async () => {
  return expect(
    authenticateUser({
      email: wrongEmail,
      password: wrongPassword,
    })
  ).rejects.toThrow("No user with that email exists!");
});

test("AuthenticateUser function should throw proper error message if email input is missing", async () => {
    return expect(
      authenticateUser({
        email: missingInput,
        password: correctPassword,
      })
    ).rejects.toThrow("Email and password required!");
  });

  test("AuthenticateUser function should throw proper error message if password input is missing", async () => {
    return expect(
      authenticateUser({
        email: correctEmail,
        password: missingInput,
      })
    ).rejects.toThrow("Email and password required!");
  });

test("AuthenticateUser function should return object containing email, password, and token", async () => {
  const authenticatedUser = await authenticateUser({
    email: correctEmail,
    password: correctPassword,
  });
  expect(authenticatedUser).toBeInstanceOf(Object)
  expect(authenticatedUser.password);
  expect(authenticatedUser.email).toEqual(fakeuser.email);
  expect(authenticatedUser).toHaveProperty('token')
});
