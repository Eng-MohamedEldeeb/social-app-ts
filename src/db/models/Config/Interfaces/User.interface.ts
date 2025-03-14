import { Types } from "mongoose";
import { TUser, TUserRequest, UserRole } from "../Types/User.type.js";
import { TFile } from "../../../../utils/Upload/Types/file.types.js";

interface IUser {
  _id?: Types.ObjectId;
  firstName: string;
  lastName: string;
  phone: string;
  age?: number;

  avatar: TFile;

  email: string;
  userName: string;
  password: string;
  passwords: string[];

  followers: Types.ObjectId[] | TUser;
  following: Types.ObjectId[] | TUser;
  blockList: Types.ObjectId[] | TUser;

  requests: TUserRequest[];
  posts?: Types.ObjectId[];

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

  __v?: number;
}

export default IUser;
