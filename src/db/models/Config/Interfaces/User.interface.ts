import { Types } from "mongoose";
import Crypto from "crypto-js";
import {
  TUser,
  TUserRequest,
  UserGender,
  UserRole,
} from "../Types/User.type.js";
import { TFile } from "../../../../utils/Upload/Types/file.types.js";
import { Document } from "mongoose";

interface IUser extends Document<IUser> {
  // _id?: Types.ObjectId;
  firstName: string;
  lastName: string;
  phone: string | Crypto.lib.CipherParams;
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
  gender: UserGender;
  birthDate: Date;

  verified: boolean;

  changedPasswordAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  otp: {
    otpType: string;
    otpCode: string | Crypto.lib.CipherParams;
  };

  __v?: number;
}

export default IUser;
