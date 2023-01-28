import { Router } from "express";
import { CategoryController } from "../Controller/CategoriesController";

const router = Router();
router.get(`/`, CategoryController.getAll);

export default router;
