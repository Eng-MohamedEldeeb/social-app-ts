// Express Router:
import { Router } from "express";

// AuthService:
import authService from "./auth.service.js";

// Validation:
import validate from "../../middlewares/validation.middleware.js";
import { signupSchema } from "./validation/signup.validation.js";

// File Reader:
import fileReader from "../../utils/Upload/file.reader.js";
import { avatar } from "./validation/types/allowedFiles.type.js";
import { loginSchema } from "./validation/login.validation.js";

const router: Router = Router();

router.post(
  "/register",
  fileReader
    .fileReader({ allowedFiles: Object.values(avatar) })
    .single("avatar"),
  validate(signupSchema),
  authService.register
);
router.post("/login", validate(loginSchema), authService.login);

export default router;
