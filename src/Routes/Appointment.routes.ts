import { Router } from "express";

import { AgendamentoController } from "../Controller/AppointmentController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new AgendamentoController();

const router = Router();
router.get(`/:loja_id`, controller.listar);

export default router;
