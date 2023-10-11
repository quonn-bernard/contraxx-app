const fname = "Albert";
const correctEmail = "athomas@gmail.com";
const wrongEmail = "frfrf@gmo.com";
const correctPassword = "CoachThomas1!";
const wrongPassword = "CoachThomas2!";
const missingInput = "";

const fakeuser = {
  fname: fname,
  lname: "Thomas",
  email: correctEmail,
  password: correctPassword,
};

const incompleteUserInput = {
  fname: "Albert",
  lname: missingInput,
  email: correctEmail,
  password: correctPassword,
};

const missingEmailLogin = {
  email: missingInput,
  password: correctPassword,
};

const wrongEmailLogin = {
  email: wrongEmail,
  password: correctPassword,
};

const wrongPasswordLogin = {
  email: correctEmail,
  password: wrongPassword,
};

const missingPasswordLogin = {
  email: correctEmail,
  password: missingInput,
};

const correctLogin = {
    email: correctEmail,
    password: correctPassword
}

export {
  fakeuser,
  incompleteUserInput,
  missingEmailLogin,
  missingPasswordLogin,
  wrongEmailLogin,
  missingInput,
  wrongPassword,
  wrongPasswordLogin,
  correctEmail,
  wrongEmail,
  correctPassword,
  correctLogin
};
