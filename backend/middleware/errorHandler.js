import { HTTP_ERROR_CODES } from "../constants/errorCodes.js";

const errorHandler = (error, req, res, next) => {
  let statusCode;
  switch (error.name) {
    case "DUPLICATE_RESOURCE_ERROR":
      statusCode = HTTP_ERROR_CODES["DUPLICATE_RESOURCE_ERROR"];
      break;
    case "INCOMPLETE_INPUT_ERROR":
      statusCode = HTTP_ERROR_CODES["INCOMPLETE_INPUT_ERROR"];
      break;
    default:
      statusCode = 500;
  }

  return res.status(statusCode).send({
    statusCode: statusCode,
    stack: error.stack,
  });
};

export { errorHandler };
