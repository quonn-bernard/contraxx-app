class APIError extends Error {
  constructor(errorCode, message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode
    this.name = this.constructor.name
  }
}

export {
    APIError
}