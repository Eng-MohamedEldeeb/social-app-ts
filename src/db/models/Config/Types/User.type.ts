import { Types } from "mongoose";
import { TFile } from "../../../../utils/Upload/Types/file.types.js";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export enum UserPrivacy {
  PUBLIC = "false",
  PRIVATE = "true",
}
export type TUserRequest = {
  requestType: string;
  requestBy: Types.ObjectId | TUser;
};

export type TUser = {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  phone: string;
  age: number;

  avatar: TFile;

  email: string;
  userName: string;
  password: string;
  passwords: string[];

  followers: Types.ObjectId[] | TUser;
  following: Types.ObjectId[] | TUser;
  blockList: Types.ObjectId[] | TUser;

  requests: TUserRequest[];
  posts: Types.ObjectId[];

  private: boolean;
  role: UserRole;

  changedPasswordAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  otp: {
    otpType: string;
    otpCode: string;
  };

  __v: number;
};
