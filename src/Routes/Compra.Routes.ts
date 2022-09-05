

import { Router } from "express";

import { CompraController } from "../Controller/CompraController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new CompraController();

const router = Router();
router.get(`/:agenda_cliente_id`, controller.getAll);
router.post(`/`, controller.create);


export default router;