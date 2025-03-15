import { CallbackWithoutResultAndOptionalError, FlatRecord } from "mongoose";
import IUser from "../../Config/Interfaces/User.interface.js";

const preSaveHook = function (
  this: FlatRecord<IUser>,
  next: CallbackWithoutResultAndOptionalError
): void | Promise<void> {
  if (this.isModified("password")) {
    // const hashedPassword =
    this.passwords.push(this.password);
  }

  return next();
};
