import { NextFunction, Request, Response } from "express";
import errorResponse from "../Res/error.response.js";

const unknownURLHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = `Unknown Url! => ${req.originalUrl}`;

  errorResponse({ next, error, status: 404 });
};

export default unknownURLHandler;
