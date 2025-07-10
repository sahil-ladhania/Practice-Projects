import { Router } from "express";
import { createCategory, getAllCategories } from "../controllers/category.controller";

const router = Router();

router.post('/' , createCategory);
router.get('/' , getAllCategories);

export default router;