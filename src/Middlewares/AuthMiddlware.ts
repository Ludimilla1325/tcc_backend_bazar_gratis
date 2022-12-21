import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { TokenPayLoad } from "../Interfaces/TokenPayLoad";
import { secret } from "../Utils/tokenSecret";

declare global {
  namespace Express {
    interface Request {
      userId: number;
      role: "admin" | "cooperator" | "master";
    }
  }
}

export const roles = (roles: any[]) => {
  const data: any[] = [];
  return (req: Request, res: Response, next: NextFunction) => {
    roles.forEach((role) => {
      if (req.role === role) {
        data.push(role);
      }
      if (data.length == 0) {
        return res.status(401).send("Not allowed");
      }
    });
    next();
  };
};

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, secret);
    const { id, role } = data as TokenPayLoad;
    req.userId = id;
    req.role = role;

    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
}
