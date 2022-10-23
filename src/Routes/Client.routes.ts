import { Router } from "express";

import { ClienteController } from "../Controller/ClientController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new ClienteController();

const router = Router();
router.post(`/`, controller.criar);

router.post(`/login`, controller.login);

export default router;
