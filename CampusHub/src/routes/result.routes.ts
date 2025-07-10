import { Router } from "express";
import { createResult, getResultByStudentId } from "../controllers/result.controller";

const router = Router();

router.post("/" , createResult);
router.get("/:studentId", getResultByStudentId);

export default router;