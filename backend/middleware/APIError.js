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

export {
    DUPLICATE_RESOURCE_ERROR,
    INCOMPLETE_INPUT_ERROR
}