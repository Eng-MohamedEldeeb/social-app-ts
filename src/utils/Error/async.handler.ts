import { NextFunction, Request, Response } from "express";
import errorResponse from "../Res/error.response.js";
import { IError } from "./types/errorHandlers.types.js";

const asyncHandler = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await fn(req, res, next).catch((error: IError) => {
      return errorResponse({
        next,
        error: error.error,
        status: error.status || 400,
      });
    });
  };
};

export default asyncHandler;
