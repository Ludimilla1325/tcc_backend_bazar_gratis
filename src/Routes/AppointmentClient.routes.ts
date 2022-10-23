import { Router } from "express";

import { AppointmentClientController } from "../Controller/AppointmentClientController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new AppointmentClientController();

const router = Router();
router.get(`/:clienteId`, controller.getAll);
router.post(`/`, controller.create);
router.patch(`/:agendamento_cliente_id`, controller.confirmarEntrega);

export default router;
