// Express Router:
import { Router } from "express";

// AuthService:
import authService from "./auth.service.js";

const router: Router = Router();

router.post("/register", authService.register);

export default router;
