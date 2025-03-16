// Express Types:
import { NextFunction, Request, Response } from "express";

// DB Service Type:
import DbService from "../../../db/dbService.service.js";

// Types:
import IUser from "../../../db/models/Config/Interfaces/User.interface.js";
import { ISignUp } from "./types/auth.types.js";
import { folderTypes } from "../../../utils/Upload/Types/file.types.js";

// Utils:
import asyncHandler from "../../../utils/Error/async.handler.js";
import errorResponse from "../../../utils/Res/error.response.js";
import successResponse from "../../../utils/Res/success.response.js";
import cloud from "../../../utils/Upload/cloud/cloudinary.js";
import { UploadApiResponse } from "cloudinary";
import SecurityModel from "../../../utils/Security/security.model.js";

export const registerService = (model: DbService<IUser>) => {
  return asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      // User Data:
      const {
        firstName,
        lastName,
        userName,
        email,
        phone,
        password,
        gender,
        birthDate,
      }: ISignUp = req.body;

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

      const user = await model.create({
        firstName,
        lastName,
        userName,
        email,
        phone: SecurityModel.encrypt(phone),
        password: SecurityModel.hashValue(password),
        gender,
        birthDate,
      });
      if (req.file) {
        const folder = `${process.env.APP_NAME as string}/user_${user._id}/${
          folderTypes.avatar
        }`;

        await cloud.uploader
          .upload(req.file.path, { folder })
          .then(async (data: UploadApiResponse) => {
            const { public_id, secure_url } = data;
            user.avatar = {
              public_id,
              secure_url,
            };
            await user.save();
          })
          .catch((error) => console.error(error));
      }
      return successResponse<IUser>({
        res,
        msg: "User Created Successfully, You Are Ready To Verify Your Account",
        status: 201,
        data: user,
      });
    }
  );
};
