import { Schema, Types } from "mongoose";
import IUser from "../../../Interfaces/User.interface.js";
import { UserPrivacy, UserRole } from "../../../Types/User.type.js";
import { postsVirtual, setUserAge } from "../Virtual/User.virtual.js";

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
    },
    userName: {
      type: String,
      required: [true, "userName field is required"],
      unique: [true, "userName already exists"],
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

    // Changed Credentials At:
    changedPasswordAt: Date,

    // Changed Credentials At:
    deletedAt: { type: Date, expires: "1m" },

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

userSchema.virtual("dob").set(setUserAge);

export default userSchema;
