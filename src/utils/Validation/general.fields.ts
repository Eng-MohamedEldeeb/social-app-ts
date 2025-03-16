import joi from "joi";
import {
  UserGender,
  UserRole,
} from "../../db/models/Config/Types/User.type.js";
import * as validationPatterns from "./regex.patterns.js";

export const fileFields = {
  fieldname: joi.string(),
  originalname: joi.string(),
  encoding: joi.string(),
  destination: joi.string(),
  filename: joi.string(),
  path: joi.string(),
  size: joi.number(),
};
export const generalFields = {
  // User Information:
  firstName: joi.string(),
  lastName: joi.string(),
  phone: joi.string().pattern(validationPatterns.phoneRegEx),

  userName: joi.string().pattern(validationPatterns.userNameRegEx),
  email: joi.string().pattern(validationPatterns.emailRegEx).email(),
  password: joi.string().pattern(validationPatterns.passwordRegEx),
  confirmPassword: joi
    .string()
    .pattern(validationPatterns.passwordRegEx)
    .valid(joi.ref("password")),
  birthDate: joi.date().less("now"),

  gender: joi
    .string()
    .valid(...Object.values(UserGender))
    .default(UserGender.MALE),

  role: joi
    .string()
    .valid(...Object.values(UserRole))
    .default(UserRole.USER),

  // Files:

  file: function ({ allowedFiles }: { allowedFiles: string[] }) {
    return joi.object().keys({
      ...fileFields,
      mimetype: joi.string().valid(...Object.values(allowedFiles)),
    });
  },
  files: function ({ allowedFiles }: { allowedFiles: string[] }) {
    return joi.array().items({
      ...fileFields,
      mimetype: joi.string().valid(...Object.values(allowedFiles)),
    });
  },
};
export default generalFields;
