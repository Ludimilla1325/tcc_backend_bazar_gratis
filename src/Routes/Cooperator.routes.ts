import { Router } from "express";

import { CooperatorController } from "../Controller/CooperatorController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const router = Router();
router.post(`/`, authMiddleware, CooperatorController.create);

router.post(`/login`, CooperatorController.login);

router.put(`/`, authMiddleware, CooperatorController.update);

router.put(`/pass`, authMiddleware, CooperatorController.updatePass);

router.get(`/store/:storeId`, authMiddleware, CooperatorController.getAll);
router.get(`/by_id/:id`, CooperatorController.getById);
router.get(`/by_email/:email`, CooperatorController.getByEmail);

export default router;
