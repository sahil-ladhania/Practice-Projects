import { Router } from "express";
import authRoutes from './auth.routes';
import postRoutes from './post.routes';
import adminPostReviewRoutes from './adminPostReview.routes';
import categoryRoutes from './category.routes';

const router = Router();

router.use('/auth' , authRoutes);
router.use('/posts' , postRoutes);
router.use('/admin/posts' , adminPostReviewRoutes);
router.use('/categories' , categoryRoutes);

export default router;