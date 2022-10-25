import { Router } from "express";

import { CooperatorController } from "../Controller/CooperatorController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";
//import { authMiddleware } from "../Middlewares/authMiddleware";



const router = Router();
router.post(`/`, authMiddleware,CooperatorController.create);

router.post(`/login`, CooperatorController.login);


router.patch(`/`, authMiddleware,CooperatorController.update);


router.get(`/loja/:storeId`,authMiddleware, CooperatorController.getAll);
router.get(`/by_id/:id`, CooperatorController.getById);
router.get(`/by_email/:email`, CooperatorController.getByEmail);

export default router;
