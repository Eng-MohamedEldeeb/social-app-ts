import { Schema, Types } from "mongoose";
import IUser from "../../Config/Interfaces/User.interface.js";
import {
  UserGender,
  UserPrivacy,
  UserRole,
} from "../../Config/Types/User.type.js";
import { postsVirtual, setUserAge } from "../Virtual/User.virtual.js";

// Validation:
import { validateField } from "./../Validation/fields.validate.js";
import * as validationPatterns from "./../../../../utils/Validation/regex.patterns.js";
import preSaveHook from "../Hook/preSave.hook.js";

const userSchema = new Schema<IUser>(
  {
    // Info:
    firstName: {
      type: String,
      required: [true, "firstName field is required"],
    },
    lastName: { type: String, required: [true, "lastName field is required"] },
    age: Number,
    phone: { type: String, required: [true, "phone field is required"] },

    // Avatar:
    avatar: {
      public_id: {
        type: String,
        default: "",
      },

      secure_url: {
        type: String,
        default: "",
      },
    },

    // Credentials:
    email: {
      type: String,
      required: [true, "email field is required"],
      unique: [true, "email already exists"],
      validate: {
        validator: validateField(validationPatterns.emailRegEx),
        message: "In-valid email",
      },
    },
    userName: {
      type: String,
      required: [true, "userName field is required"],
      unique: [true, "userName already exists"],
      validate: {
        validator: validateField(validationPatterns.userNameRegEx),
        message: "In-valid userName",
      },
    },
    password: { type: String, required: [true, "password field is required"] },
    passwords: [String],

    followers: [{ type: Types.ObjectId, ref: "User" }],
    following: [{ type: Types.ObjectId, ref: "User" }],
    blockList: [{ type: Types.ObjectId, ref: "User" }],

    requests: [{ type: Types.ObjectId, ref: "User" }],

    private: {
      type: Boolean,
      enum: UserPrivacy,
      default: Boolean(UserPrivacy.PUBLIC),
    },

    role: { type: String, enum: UserRole, default: UserRole.USER },
    gender: { type: String, enum: UserGender, default: UserGender.MALE },

    // Changed Credentials At:
    changedPasswordAt: Date,

    // Changed Credentials At:
    deletedAt: { type: Date, expires: "1m" },

    verified: { type: Boolean, default: false },

    otp: {
      otpType: String,
      otpCode: String,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

userSchema.virtual("posts", postsVirtual);

userSchema.virtual("birthDate").set(setUserAge);

userSchema.pre("save", preSaveHook);

export default userSchema;
