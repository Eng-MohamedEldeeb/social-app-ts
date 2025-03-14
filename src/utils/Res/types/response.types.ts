import { NextFunction, Response } from "express";

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
  error: string;
};

export { TSuccessResponse, TErrorResponse };
