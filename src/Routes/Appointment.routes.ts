import { Router } from "express";

import { AppointmentController } from "../Controller/AppointmentController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const router = Router();
router.get(`/:loja_id`, AppointmentController.list);

router.post(`/`, AppointmentController.create);

router.put(`/`, AppointmentController.update);

router.delete(`/:id`, AppointmentController.delete);

export default router;
