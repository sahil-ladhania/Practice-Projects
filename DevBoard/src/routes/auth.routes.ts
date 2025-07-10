import { Router } from "express";
import { generateApiKey, getCurrentUser, loginUser, registerUser } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/api-key", generateApiKey);
router.get("/me", getCurrentUser);

export default router;