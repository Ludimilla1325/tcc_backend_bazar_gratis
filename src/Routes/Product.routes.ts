import { Router } from "express";
import { body } from "express-validator";

import { authMiddleware, roles } from "../Middlewares/AuthMiddlware";
import { validator } from "../Middlewares/Validator";
import { ProdutoController } from "../Controller/ProductController";

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
router.get(`/:storeId`, authMiddleware, ProdutoController.getAllProducts);
router.get(
  `/:storeId/:productId`,
  authMiddleware,
  ProdutoController.getProductById
);
router.put(
  `/:storeId/:productId`,
  authMiddleware,
  roles(["admin", "master"]),
  ProdutoController.updateProduct
);
router.post(
  `/:storeId`,
  authMiddleware,
  roles(["admin", "master"]),
  ...product,
  validator,
  ProdutoController.createProduct
);
router.delete(
  `/:storeId/:productId`,
  authMiddleware,
  roles(["admin", "master"]),
  ProdutoController.deleteProductById
);

export default router;
