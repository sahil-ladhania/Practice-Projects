import { Router } from "express";
import { createAnnouncement, getAllAnnouncements } from "../controllers/announcement.controller";

const router = Router();

router.post("/" , createAnnouncement);
router.get("/", getAllAnnouncements);

export default router;