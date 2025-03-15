import { NextFunction, Response } from "express";
import { ValidationErrorItem } from "joi";

type TJoiError = {
  key: string;
  details: ValidationErrorItem[];
};
type TSuccessResponse<TData> = {
  res: Response;
  status: number;
  msg: string;
  data: TData;
};

type TErrorResponse = {
  res?: Response;
  next?: NextFunction;
  status: number;
  error: string | TJoiError[];
};

export { TSuccessResponse, TErrorResponse };
