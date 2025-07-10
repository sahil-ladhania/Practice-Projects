import { Router } from "express";
import { approvePost, getAllPendingPosts, rejectPost } from "../controllers/adminPostReview.controller";

const router = Router();

router.get('/' , getAllPendingPosts);
router.put('/:id/approve' , approvePost);
router.put('/:id/reject' , rejectPost);

export default router;