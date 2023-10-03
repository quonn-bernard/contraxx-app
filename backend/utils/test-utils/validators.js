import { validateEmail } from "../validation/inputValidation";
import { validatePassword } from "../validation/inputValidation";
import { validateName } from "../validation/inputValidation";

const validateNotEmpty = (received) => {
  expect(received).not.toBeNull();
  expect(received).not.toBeUndefined();
  expect(received).toBeTruthy();
};

const validateStringEquality = (received, expected) => {
//   expect(received).not.toEqual("dummydfasfsdfsdfasdsd");
  expect(received).toEqual(expected);
};

const validateResourceDuplicationError = (fname, lname, email, password) => {
  expect(validateName(fname, lname)).toEqual(true);
  expect(validateEmail(email)).toEqual(true)
  expect(validatePassword(password)).toEqual(true);
  expect(code).not.toBe(255);
  expect(code).toBe(11000);
};

export {
    validateNotEmpty,
    validateStringEquality,
    validateResourceDuplicationError
}
