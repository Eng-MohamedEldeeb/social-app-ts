// Joi:
import joi from "joi";
import generalFields from "../../../utils/Validation/genral.fields.js";
import { avatar } from "./types/allowedFiles.type.js";

export const signupValidation = {
  body: joi.object().keys({
    firstName: generalFields.firstName.required(),
    lastName: generalFields.lastName.required(),

    userName: generalFields.userName.required(),
    email: generalFields.email.required(),
    phone: generalFields.phone,
    password: generalFields.password.required(),
    confirmPassword: generalFields.confirmPassword.required(),

    birthDate: generalFields.birthDate,

    gender: generalFields.gender.required(),
    role: generalFields.role,
  }),

  file: generalFields.file({ allowedFiles: Object.values(avatar) }),
};
