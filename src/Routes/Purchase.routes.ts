import { Router } from "express";

import { authMiddleware } from "../Middlewares/AuthMiddlware";
import { PurchaseController } from "../Controller/PurchaseController";

const router = Router();
router.get(
  `/:appointment_client_id`,
  authMiddleware,
  PurchaseController.getAll
);
router.post(`/`, authMiddleware, PurchaseController.create);
router.delete(`/:purchase_id`, authMiddleware, PurchaseController.delete);

export default router;
