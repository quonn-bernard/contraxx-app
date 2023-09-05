import { APIError } from "./APIError.js";
const errorHandler = (error, req, res, next) => {

    if(error.name === "APIError"){
        return res.status(error.statusCode).json({
            code: error.errorCode,
            stack: error.stack
        })
    }

  return res.status(500).send("Something went wrong" );
};

export { errorHandler };
