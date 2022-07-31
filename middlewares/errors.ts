import type { NextApiRequest, NextApiResponse } from "next";

import ErrorHandler from "../utils/errorHandler";

/**
 *
 * @param err
 * @param req
 * @param res
 * @param next
 */
const onError = (
  err: any,
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};

export { onError };
