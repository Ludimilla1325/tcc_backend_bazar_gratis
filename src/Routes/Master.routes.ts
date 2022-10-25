import { Router } from "express";

import { MasterController } from "../Controller/MasterController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";




const router = Router();
router.post(`/`, MasterController.criar);
router.patch(`/`, authMiddleware,MasterController.update);
router.post(`/login` ,MasterController.login);

export default router;
