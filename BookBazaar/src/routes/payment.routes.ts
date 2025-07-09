import { Router } from "express";
import { createFakePayment, verifyFakePayment } from "../controllers/payment.controller";

const router = Router();

router.post('/create' , createFakePayment);
router.post('/verify' , verifyFakePayment);

export default router;