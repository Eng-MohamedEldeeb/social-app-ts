// Joi:
import joi from "joi";

// Enum:
import { UserRole } from "../../../db/models/Config/Types/User.type.js";

// RegEx Patterns:
import * as validationPatterns from "./../../../utils/Validation/regex.patterns.js";

export const signupValidation = {
  body: joi.object().keys({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    phone: joi.string().pattern(validationPatterns.phoneRegEx).required(),

    userName: joi.string().pattern(validationPatterns.userNameRegEx).required(),
    email: joi
      .string()
      .pattern(validationPatterns.emailRegEx)
      .email()
      .required(),
    password: joi.string().pattern(validationPatterns.passwordRegEx).required(),
    confirmPassword: joi
      .string()
      .pattern(validationPatterns.passwordRegEx)
      .valid(joi.ref("password"))
      .required(),

    birthDate: joi.date(),

    role: joi.boolean().valid(UserRole).default(UserRole.USER),
  }),
};
