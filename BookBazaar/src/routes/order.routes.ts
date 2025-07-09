import { Router } from "express";
import { getOrderById, getUserOrders, placeOrder } from "../controllers/order.controller";

const router = Router();

router.post('/' , placeOrder);
router.get('/' , getUserOrders);
router.get('/:id' , getOrderById);

export default router;