import { Router } from "express";

import { ProdutoController } from "../Controller/ProductController";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new ProdutoController();

const router = Router();
router.get(`/:storeId`, controller.getAllProducts);
router.get(`/:storeId/:productId`, controller.getProductById);
router.put(`/:storeId/:productId`, controller.updateProduct);
router.post(`/:storeId`, controller.createProduct);
router.delete(`/:storeId/:productId`, controller.deleteProductById);

export default router;
