

import { Router } from "express";

import { AgendamentoClienteController } from "../Controller/AgendamentoClienteController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new AgendamentoClienteController();

const router = Router();
router.get(`/:clienteId`, controller.getAll);
router.post(`/`, controller.create);
router.patch(`/:agendamento_cliente_id`, controller.confirmarEntrega);




export default router;