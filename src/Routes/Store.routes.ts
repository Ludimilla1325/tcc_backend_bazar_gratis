import { Router } from "express";

import { StoreController } from "../Controller/StoreController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";

const router = Router();
router.post(`/`, authMiddleware, StoreController.create);
router.patch(`/`, authMiddleware, StoreController.update);
router.get(`/`, authMiddleware, StoreController.get);
router.get(`/:id`, authMiddleware, StoreController.getById);

export default router;
