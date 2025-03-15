// Express Router:
import { Router } from "express";

// AuthService:
import authService from "./auth.service.js";

// Validation:
import validate from "../../middlewares/validation.middleware.js";
import { signupValidation } from "./validation/signup.validation.js";

const router: Router = Router();

router.post("/register", validate(signupValidation), authService.register);

export default router;
