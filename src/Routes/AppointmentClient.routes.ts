import { Router } from "express";

import { AppointmentClientController } from "../Controller/AppointmentClientController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";
const router = Router();
router.get(`/teste`, (req, res) => {
  return res.status(200).send("teste");
});

router.get(`/`, authMiddleware, AppointmentClientController.getAllByClient);
router.get(
  `/byStore/:store_id`,
  authMiddleware,
  AppointmentClientController.getAllByStore
);

router.post(`/`, authMiddleware, AppointmentClientController.create);
router.put(`/`, authMiddleware, AppointmentClientController.update);
router.patch(
  `/:agendamento_cliente_id`,
  AppointmentClientController.confirmDelivery
);
router.delete(
  `/:agendamento_cliente_id`,
  authMiddleware,
  AppointmentClientController.delete
);
router.get(
  `/cancelReservations`,
  AppointmentClientController.cancelReservations
);
export default router;
