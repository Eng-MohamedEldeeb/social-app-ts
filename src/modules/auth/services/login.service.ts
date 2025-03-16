import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../../utils/Error/async.handler.js";
import IUser from "../../../db/models/Config/Interfaces/User.interface.js";
import DbService from "../../../db/dbService.service.js";
import { ILogin } from "./types/auth.types.js";
import SecurityModel from "../../../utils/Security/security.model.js";
import errorResponse from "../../../utils/Res/error.response.js";
import successResponse from "../../../utils/Res/success.response.js";

const loginService = (model: DbService<IUser>) => {
  return asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { userName, email, password }: ILogin = req.body;

      const checkUser = await model.findOne({
        filter: {
          $or: [{ email }, { userName }],
        },
        select: {
          password: 1,
        },
      });
      if (!checkUser)
        return errorResponse({ next, error: "User not found", status: 404 });

      if (
        !SecurityModel.compareValues({
          encryptedText: checkUser.password as string,
          value: password,
        })
      )
        return errorResponse({
          next,
          error: "in-valid email or password",
          status: 400,
        });

      return successResponse({
        res,
        msg: "Logged in Successfully",
        status: 200,
        data: checkUser,
      });
    }
  );
};

export default loginService;
