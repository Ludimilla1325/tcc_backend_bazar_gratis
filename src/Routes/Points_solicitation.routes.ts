import { Router } from "express";
import { PointsSolicitationController } from "../Controller/Points_solicitationController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";

const controller = new PointsSolicitationController();

const router = Router();

router.get(`/:id`, authMiddleware, controller.getOne);
router.get(`/`, authMiddleware, controller.getAll);
//router.post(`/`, authMiddleware, controller.create);
router.put(
  `/:id`,
  authMiddleware,
  controller.updatePointsSolicitationAcceptOrNot
);
router.delete(`/:id`, authMiddleware, controller.delete);

export default router;
