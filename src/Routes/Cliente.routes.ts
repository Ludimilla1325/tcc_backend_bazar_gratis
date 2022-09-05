

import { Router } from "express";

import { ClienteController } from "../Controller/ClienteController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const cartorioController = new ClienteController();

const router = Router();
router.post(`/`, cartorioController.criar);


export default router;