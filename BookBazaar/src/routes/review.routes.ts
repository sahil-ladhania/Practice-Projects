import { Router } from "express";
import { addReview, deleteReviewById, getReviewsForBook } from "../controllers/review.controller";

const router = Router();

router.post('/:bookId/reviews' , addReview);
router.get('/:bookId/reviews' , getReviewsForBook);
router.delete('/reviews/:id' , deleteReviewById);

export default router;