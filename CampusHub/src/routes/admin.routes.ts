import { Router } from "express";
import { getAllUsers, updateUserRole } from "../controllers/admin.controller";

const router = Router();

router.get("/" , getAllUsers);
router.put("/:id/role", updateUserRole);

export default router;