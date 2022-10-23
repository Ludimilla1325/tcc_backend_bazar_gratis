import { Router } from "express";

import { ProdutoController } from "../Controller/ProductController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new ProdutoController();

const router = Router();
router.get(`/:loja_id`, controller.toList);

export default router;
