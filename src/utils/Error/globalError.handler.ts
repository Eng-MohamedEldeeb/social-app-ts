import { NextFunction, Request, Response } from "express";
import { IError } from "./types/errorHandlers.types.js";

const globalErrorHandler = (
  error: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.status || 500).json({
    success: false,
    error: error.error,
  });
};

export default globalErrorHandler;
