// Transporter:
import sendEmail from "./../config/transport.js";

// Types:
import { IEmailOptions } from "../schemas/types/emailSchema.type.js";
import SMTPTransport from "nodemailer/lib/smtp-transport/index.js";

// Email Schemas:
import * as emailSchemas from "./../schemas/email.schema.js";

const send = ({
  emailType,
  email,
  userName,
  otp,
}: {
  emailType: keyof typeof emailSchemas;
} & IEmailOptions): Promise<SMTPTransport.SentMessageInfo> => {
  return sendEmail.sendMail(emailSchemas[emailType]({ email, userName, otp }));
};

export default send;

// // const emailSchemaTypes: (keyof typeof emailSchemas)[] = [
// //   "greetingEmail",
// //   "confirmEmail",
// //   "verifyEmail",
// //   "resetPassword",
// //   "changePassword",
// //   "deleteAccount",
// // ];

// export const emailTypes = {
//   greeting: "greeting",
//   confirmEmail: "confirmEmail",
//   verifyEmail: "verifyEmail",
//   resetPassword: "resetPassword",
//   changePassword: "changePassword",
//   deleteAccount: "deleteAccount",
// };
