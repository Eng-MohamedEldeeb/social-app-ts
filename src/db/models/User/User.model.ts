import { model, models } from "mongoose";
import IUser from "../Config/Interfaces/User.interface.js";
import userSchema from "./Schema/User.schema.js";

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
