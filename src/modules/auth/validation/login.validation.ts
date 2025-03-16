// Joi:
import joi, { ObjectSchema } from "joi";
import generalFields from "../../../utils/Validation/general.fields.js";

export const loginSchema: { body: ObjectSchema } = {
  body: joi.object().keys({
    userName: joi
      .alternatives()
      .conditional("email", {
        is: joi.exist(),
        then: joi.optional(),
        otherwise: joi.string().required(),
      }),
    email: joi.alternatives().conditional("userName", {
      is: joi.exist(),
      then: joi.optional(),
      otherwise: joi.string().email().required(),
    }),
    password: generalFields.password.required(),
  }),
};
