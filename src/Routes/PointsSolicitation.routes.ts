import { Router } from "express";
import { authMiddleware } from "../Middlewares/AuthMiddlware";
import { PointsSolicitationController } from "../Controller/PointsSolicitationController";

const router = Router();

router.get(`/one/:id`, authMiddleware, PointsSolicitationController.getOne);

router.get(`/`, authMiddleware, PointsSolicitationController.getAll);
router.post(`/`, authMiddleware, PointsSolicitationController.create);
router.put(
  `/:id`,
  authMiddleware,
  PointsSolicitationController.updatePointsSolicitationAcceptOrNot
);
router.delete(`/:id`, authMiddleware, PointsSolicitationController.delete);

export default router;
