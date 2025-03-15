// Express Router:
import { Router } from "express";

// AuthService:
import authService from "./auth.service.js";

// Validation:
import validate from "../../middlewares/validation.middleware.js";
import { signupValidation } from "./validation/signup.validation.js";

// File Reader:
import fileReader from "../../utils/Upload/file.reader.js";
import { avatar } from "./validation/types/allowedFiles.type.js";

const router: Router = Router();

router.post(
  "/register",
  fileReader
    .fileReader({ allowedFiles: Object.values(avatar) })
    .single("avatar"),
  validate(signupValidation),
  authService.register
);

export default router;
