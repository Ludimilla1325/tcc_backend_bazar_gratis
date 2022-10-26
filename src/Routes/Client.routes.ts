import { Router } from "express";

import { ClienteController } from "../Controller/ClientController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new ClienteController();

const router = Router();
router.post(`/`, controller.criar);
router.get(`/`, controller.findClientByEmail);
router.put(`/`, controller.update);
router.post(`/login`, controller.login);
router.post(`/pass`, controller.updatePass);

export default router;
