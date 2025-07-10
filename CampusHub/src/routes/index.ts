import { Router } from "express";
import authRoutes from "./auth.routes";
import announcementRoutes from './announcement.routes';
import resultRoutes from './result.routes';
import courseMaterialRoutes from './courseMaterial.routes';
import adminRoutes from './admin.routes';

const router = Router();

router.use("/auth", authRoutes);
router.use("/announcements", announcementRoutes);
router.use("/results", resultRoutes);
router.use("/courses", courseMaterialRoutes);
router.use("/admin/users", adminRoutes);

export default router;