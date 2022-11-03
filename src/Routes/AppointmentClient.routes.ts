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
router.patch(`/:id`, AppointmentClientController.confirmDelivery);
router.delete(`/:id`, AppointmentClientController.delete);
export default router;
