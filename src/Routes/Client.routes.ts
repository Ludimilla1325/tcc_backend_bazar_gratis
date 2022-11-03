import { Router } from "express";
import { body, query } from "express-validator";

import { ClienteController } from "../Controller/ClientController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";
import { validator } from "../Middlewares/validator";
//import { authMiddleware } from "../Middlewares/authMiddleware";

const controller = new ClienteController();
export function withMessage(param: string) {
  return `Necessario informar parametro ${param}`;
}

const createClient = [
  body("name").notEmpty(),
  body("name").isString().withMessage(withMessage("name")),

  body("email").notEmpty(),
  body("email").isString().withMessage(withMessage("email")),

  body("phone").notEmpty(),
  body("phone").isString().withMessage(withMessage("phone")),

  body("cpf").notEmpty(),
  body("cpf").isString().withMessage(withMessage("cpf")),

  body("cep").notEmpty(),
  body("cep").isString().withMessage(withMessage("cep")),

  body("password").notEmpty(),
  body("password").isString().withMessage(withMessage("password")),

  body("storeId").notEmpty(),
  body("storeId").isInt().withMessage(withMessage("storeId")),

  body("points").notEmpty(),
  body("points").isInt().withMessage(withMessage("points")),
];

const login = [
  body("email").notEmpty(),
  body("email").isString().withMessage(withMessage("email")),

  body("password").notEmpty(),
  body("password").isString().withMessage(withMessage("password")),
];

const updatePass = [
  body("email").notEmpty(),
  body("email").isString().withMessage(withMessage("email")),

  body("oldPassword").notEmpty(),
  body("oldPassword").isString().withMessage(withMessage("oldPassword")),

  body("newPassword").notEmpty(),
  body("newPassword").isString().withMessage(withMessage("newPassword")),
];

const updatePoints = [
  body("id").notEmpty(),
  body("id").isInt().withMessage(withMessage("id")),

  body("points").notEmpty(),
  body("points").isInt().withMessage(withMessage("points")),
];

const email = [
  body("email").notEmpty(),
  body("email").isString().withMessage(withMessage("email")),
];

const router = Router();
router.post(`/`, ...createClient, validator, controller.criar);
router.get(`/`, authMiddleware, email, validator, controller.findClientByEmail);
router.put(`/`, authMiddleware, email, validator, controller.update);
router.post(`/login`, ...login, validator, controller.login);
router.put(
  `/pass`,
  authMiddleware,
  ...updatePass,
  validator,
  controller.updatePass
);
router.put(
  `/points`,
  authMiddleware,
  ...updatePoints,
  validator,
  controller.updatePoints
);

export default router;
