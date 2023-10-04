class DUPLICATE_RESOURCE_ERROR extends Error {
  constructor( message) {
    super(message);
    this.name = this.constructor.name
  }
}

class INCOMPLETE_INPUT_ERROR extends Error {
  constructor( message) {
    super(message);
    this.name = this.constructor.name
  }
}

class WRONG_PASSWORD_ERROR extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name
  }
}

class USER_DOES_NOT_EXIST_ERROR extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name
  }
}

export {
    DUPLICATE_RESOURCE_ERROR,
    INCOMPLETE_INPUT_ERROR,
    WRONG_PASSWORD_ERROR,
    USER_DOES_NOT_EXIST_ERROR
}