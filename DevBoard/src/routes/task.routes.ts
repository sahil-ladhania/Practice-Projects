import { Router } from "express";
import { createTask, deleteTask, getAllTasksForProject, updateTask } from "../controllers/task.controller";

const router = Router();

router.post("/:projectId/tasks", createTask);
router.get("/:projectId/tasks", getAllTasksForProject);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id ", deleteTask);

export default router;