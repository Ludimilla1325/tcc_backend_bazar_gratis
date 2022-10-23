import { Router } from "express";

import { PurchaseController } from "../Controller/PurchaseController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new PurchaseController();

const router = Router();
router.get(`/:agenda_cliente_id`, controller.getAll);
router.post(`/`, controller.create);

export default router;
