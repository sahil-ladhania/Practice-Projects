import { Router } from "express";
import { createProject, deleteProject, getAllUserProjects, getProjectById, updateProject } from "../controllers/project.controller";

const router = Router();

router.post("/", createProject);
router.get("/", getAllUserProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;