import { Router } from "express";
import { generateApiKey, getMe, loginUser, registerUser } from "../controllers/auth.controller";

const router = Router();

router.post('/register' , registerUser);
router.post('/login' , loginUser);
router.post('/api-key' , generateApiKey);
router.get('/me' , getMe);

export default router;