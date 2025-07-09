import { Router } from "express";
import authRoutes from './auth.routes';
import bookRoutes from './book.routes';
import reviewsRoutes from './review.routes';
import orderRoutes from './order.routes';
import paymentRoutes from './payment.routes';

const router = Router();

router.use('/auth' , authRoutes);
router.use('/books' , bookRoutes);
router.use('/orders' , orderRoutes);
router.use('/payments' , paymentRoutes);
router.use('/books' , reviewsRoutes);

export default router;