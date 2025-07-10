import { Router } from "express";
import { createCourse, getAllCourses, getCourseMaterials, uploadCourseMaterial } from "../controllers/courseMaterial.controller";

const router = Router();

router.get("/" , getAllCourses);
router.post("/", createCourse);
router.post("/:courseId/materials" , uploadCourseMaterial);
router.get("/:courseId/materials", getCourseMaterials);

export default router;