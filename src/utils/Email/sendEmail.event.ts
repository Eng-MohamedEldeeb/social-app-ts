// Core Module:
import { EventEmitter } from "node:events";

// Types:
import { IEmailEventOptions } from "./schemas/types/emailSchema.type.js";

// Handler:
import send from "./handler/send.handler.js";

const sendEmail: EventEmitter = new EventEmitter();

sendEmail.on("send", async (data: IEmailEventOptions) => {
  const { email, userName, otp, emailType } = data;
  return await send({ emailType, email, userName, otp }).catch((error) =>
    console.error({ msg: "NodeMailer Error", error })
  );
});

export default sendEmail;
