import { Router } from "express";

import { PurchaseController } from "../Controller/PurchaseController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new PurchaseController();

const router = Router();
router.get(`/:appointment_client_id`, authMiddleware,controller.getAll);
router.post(`/`, authMiddleware,controller.create);
router.delete(`/:purchase_id`, authMiddleware,controller.delete);

export default router;
