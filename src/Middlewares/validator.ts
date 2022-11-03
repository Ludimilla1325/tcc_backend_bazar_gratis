import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function validator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  console.log(req.body)
  if (!errors.isEmpty()) {
    res.status(400).send({
      code: "ALERTA_0003",
      message: "Campos obrigatórios",
      complementaryMessage: { errors }.errors.array(),
      success: false,
      data: null,
    });
  } else next();
}
