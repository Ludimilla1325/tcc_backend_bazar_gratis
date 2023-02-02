import { Router } from "express";
import { body, param } from "express-validator";

import { ClienteController } from "../Controller/ClientController";
import { authMiddleware } from "../Middlewares/AuthMiddlware";
import { validator } from "../Middlewares/Validator";

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
  param("email").notEmpty(),
  param("email").isString().withMessage(withMessage("email")),
];

const router = Router();
router.post(`/`, ...createClient, validator, ClienteController.criar);
router.get(
  `/:email`,
  authMiddleware,

  email,
  validator,
  ClienteController.findClientByEmail
);
router.get(
  `/refresh/client`,
  authMiddleware,

  
  ClienteController.findClientById
);
router.put(
  `/`,
  authMiddleware,
  body("email").notEmpty(),
  body("email").isString().withMessage(withMessage("email")),
  validator,
  ClienteController.update
);
router.post(`/login`, ...login, validator, ClienteController.login);
router.post(
  `/link-to-reset-pass`,
  validator,
  ClienteController.sendLinkToResetPass
);
router.get(`/reset-password/:id/:token`, ClienteController.verifyResetPass);
router.post(`/reset-password/:id/:token`, ClienteController.resetPass);
router.put(`/pass`, ...updatePass, validator, ClienteController.updatePass);
router.put(
  `/points`,
  authMiddleware,
  ...updatePoints,
  validator,
  ClienteController.updatePoints
);

export default router;
