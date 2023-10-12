import emailValidator from "email-validator";
import passwordvalidator from "password-validator";

const pwSchema = new passwordvalidator();

//requires 'fname lname' format
export const validateName = (fname, lname) => {
  const regexName = new RegExp(/^([a-zA-Z]+[ \-']{0,1}){1,3}$/);
  return regexName.test(`${fname} ${lname}`);
};

export const validateEmail = (email) => {
  return emailValidator.validate(email);
};

// Must follow 222-055-9034, 321.789.4512 or 123 256 4587 formats
export const validatePhoneNumber = (phone) => {
  const regexPhone = new RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  return regexPhone.test(phone);
};

export const validatePassword = (password) => {
  const passwordValidationSchema = pwSchema
    .is()
    .min(8)
    .is()
    .max(20)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits(1)
    .has()
    .not()
    .spaces();
  return passwordValidationSchema.validate(password);
};

export const validateUserLoginInput = (input) => {
  if (!validateEmail(input.email))
    throw new Error(`Invalid input: email address is formed incorrectly`);
    if (!validatePassword(input.password))
    throw new Error(`Password must include atleast 8 chars, one uppercase letter, one lowercase letter, 1 digit, cannot contain any spaces and must be less than 20 chars long!`);
}

export const validateUserRegistrationInput = (input) => {
  if (!validateName(input.fname, input.lname))
    throw new Error(`Invalid input: First name, last name or both are not formed properly`);
    if (!validateEmail(input.email))
    throw new Error(`Invalid input: email address is formed incorrectly`);
    if (!validatePassword(input.password))
    throw new Error(`Password must include atleast 8 chars, one uppercase letter, one lowercase letter, 1 digit, cannot contain any spaces and must be less than 20 chars long!`);
};

export const validateContractInput = (input) => {
  if (!validateName(input.fname, input.lname))
    throw new Error(`Invalid input: First name, last name or both are not formed properly`);
};


