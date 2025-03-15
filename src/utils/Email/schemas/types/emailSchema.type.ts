enum EmailTypes {
  greetingEmail = "greetingEmail",
  confirmEmail = "confirmEmail",
  verifyEmail = "verifyEmail",
  resetPassword = "resetPassword",
  changePassword = "changePassword",
  deleteAccount = "deleteAccount",
}

interface IEmailSchema {
  from: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
}

interface IEmailOptions {
  email: string;
  userName: string;
  otp: string;
}

interface IEmailEventOptions extends IEmailOptions {
  emailType: EmailTypes;
}

export { IEmailSchema, IEmailOptions, IEmailEventOptions, EmailTypes };
