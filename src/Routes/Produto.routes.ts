

import { Router } from "express";

import { ProdutoController } from "../Controller/ProdutoController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new ProdutoController();

const router = Router();
router.get(`/:loja_id`, controller.listar);


export default router;