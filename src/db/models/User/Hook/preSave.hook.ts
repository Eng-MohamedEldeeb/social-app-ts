// Utils:
import SecurityModel from "../../../../utils/Security/security.model.js";
import sendEmail from "../../../../utils/Email/sendEmail.event.js";

// Types:
import IUser from "../../Config/Interfaces/User.interface.js";
import { CallbackWithoutResultAndOptionalError, FlatRecord } from "mongoose";
import {
  EmailTypes,
  IEmailEventOptions,
} from "../../../../utils/Email/schemas/types/emailSchema.type.js";

const preSaveHook = function (
  this: FlatRecord<IUser>,
  next: CallbackWithoutResultAndOptionalError
): void | Promise<void> {
  if (this.isModified("email")) {
    const otpCode = SecurityModel.generateCode({
      length: 4,
      charset: "numeric",
    });
    console.log("email");
    console.log(this.isModified("email"));
    console.log(this.email);

    const emailData: IEmailEventOptions = {
      email: this.email,
      emailType: EmailTypes.confirmEmail,
      otp: otpCode,
      userName: this.userName,
    };

    sendEmail.emit("send", emailData);

    this.otp.otpCode = SecurityModel.encrypt(otpCode);
    this.otp.otpType = EmailTypes.confirmEmail;
  }

  return next();
};

export default preSaveHook;
