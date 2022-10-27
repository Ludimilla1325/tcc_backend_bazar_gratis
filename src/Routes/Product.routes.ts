import { Router } from "express";
import { body, query } from "express-validator";

import { ProdutoController } from "../Controller/ProductController";
import { validator } from "../Middlewares/validator";

const controller = new ProdutoController();

export function withMessage(param: string) {
  return `Necessario informar parametro ${param}`;
}

const product = [
  body("name").notEmpty(),
  body("name").isString().withMessage(withMessage("name")),

  body("description").notEmpty(),
  body("description").isString().withMessage(withMessage("description")),

  body("photo").notEmpty(),
  body("photo").isString().withMessage(withMessage("photo")),

  body("categoryId").notEmpty(),
  body("categoryId").isInt().withMessage(withMessage("categoryId")),

  body("value").notEmpty(),
  body("value").isInt().withMessage(withMessage("value")),

  body("quantity").notEmpty(),
  body("quantity").isInt().withMessage(withMessage("quantity")),
];

const router = Router();
router.get(`/:storeId`, controller.getAllProducts);
router.get(`/:storeId/:productId`, controller.getProductById);
router.put(`/:storeId/:productId`, controller.updateProduct);
router.post(`/:storeId`, ...product, validator, controller.createProduct);
router.delete(`/:storeId/:productId`, controller.deleteProductById);

export default router;
