import { models, model } from "mongoose";
import IUser from "../../Interfaces/User.interface.js";
import userSchema from "./Schema/User.schema.js";

const UserModel = models.User || model<IUser>("User", userSchema);

export default UserModel;
