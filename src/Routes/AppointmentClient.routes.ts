import { Router } from "express";

import { AppointmentClientController } from "../Controller/AppointmentClientController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";
//import { authMiddleware } from "../Middlewares/authMiddleware";


const router = Router();
router.get(`/teste`,(req,res)=>{
    return res.status(200).send('teste')
})
router.get(`/`, authMiddleware,AppointmentClientController.getAll);
router.post(`/`, authMiddleware,AppointmentClientController.create);
router.put(`/`, authMiddleware,AppointmentClientController.update);
router.patch(`/:agendamento_cliente_id`, AppointmentClientController.confirmDelivery);
router.delete(`/:agendamento_cliente_id`, authMiddleware,AppointmentClientController.delete);
export default router;
