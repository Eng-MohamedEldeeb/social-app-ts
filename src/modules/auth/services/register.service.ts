// Express Types:
import { NextFunction, Request, Response } from "express";

// DB Service Type:
import DbService from "../../../db/dbService.service.js";

// Interfaces:
import IUser from "../../../db/models/Config/Interfaces/User.interface.js";
import { ISignUp } from "./types/auth.types.js";

// Utils:
import asyncHandler from "../../../utils/Error/async.handler.js";
import errorResponse from "../../../utils/Res/error.response.js";
import successResponse from "../../../utils/Res/success.response.js";

export const registerService = (model: DbService<IUser>) => {
  return asyncHandler(
    asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
      // User Data:
      const { userName, email }: ISignUp = req.body;

      // Searching For Existing User:
      const checkUser = await model.findOne({
        filter: {
          $or: [{ userName }, { email }],
        },
        options: {
          lean: true,
          projection: "_id",
        },
      });

      if (checkUser)
        return errorResponse({
          next,
          error: "User Already Exists",
          status: 409,
        });

      const user = await model.create(req.body);

      return successResponse<IUser>({
        res,
        msg: "User Created Successfully",
        status: 201,
        data: user,
      });
    })
  );
};
