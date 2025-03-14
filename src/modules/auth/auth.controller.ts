// Express Router:
import { Router } from "express";
import authService from "./auth.service.js";

// AuthService:

const router: Router = Router();

router.post("/register", authService.register);

export default router;
