import { Router } from "express";

import { StoreController } from "../Controller/StoreController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";

const router = Router();
router.get(`/`, StoreController.get);
router.post(`/`, authMiddleware, StoreController.create);
router.put(`/:id`, authMiddleware, StoreController.update);
router.get(`/:id`, authMiddleware, StoreController.getById);
router.delete(`/:id`, authMiddleware, StoreController.deleteById);

export default router;
