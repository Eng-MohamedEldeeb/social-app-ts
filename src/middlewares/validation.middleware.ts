// Types:
import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";

// Utils:
import errorResponse from "../utils/Res/error.response.js";
import asyncHandler from "../utils/Error/async.handler.js";

const validate = (schema: Record<string, ObjectSchema>) => {
  return asyncHandler(
    async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<Response | NextFunction | void> => {
      const errors = [];

      for (const key of Object.keys(schema)) {
        const { error } = schema[key].validate(req[key as keyof Request], {
          abortEarly: false,
        });

        if (error) {
          errors.push({ key, details: error.details });
        }
      }

      if (errors.length)
        return errorResponse({ res, error: errors, status: 400 });

      return next() as unknown as NextFunction;
    }
  );
};

export default validate;
