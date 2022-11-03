import { Router } from "express";
import { body, query } from "express-validator";

import { ProdutoController } from "../Controller/ProductController";
import { authMiddleware, roles } from "../Middlewares/AuthMiddlware";
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
router.get(`/:storeId`, authMiddleware, controller.getAllProducts);
router.get(`/:storeId/:productId`, authMiddleware, controller.getProductById);
router.put(
  `/:storeId/:productId`,
  authMiddleware,
  roles(["admin", "master"]),
  controller.updateProduct
);
router.post(
  `/:storeId`,
  authMiddleware,
  roles(["admin", "master"]),
  ...product,
  validator,
  controller.createProduct
);
router.delete(
  `/:storeId/:productId`,
  authMiddleware,
  roles(["admin", "master"]),
  controller.deleteProductById
);

export default router;
