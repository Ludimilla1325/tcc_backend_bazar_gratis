import { Request, Response } from "express";
import {
  create,
  update,
  login,
  getAll,
  getById,
  getByEmail,
} from "../modules/cooperator/useCases";
import {
  CreateCooperatorDTO,
  UpdateCooperatorDTO,
} from "../modules/cooperator/dtos";
import { getRounds } from "bcrypt";
export class CooperatorController {
  static async create(req: Request, res: Response) {
    try {
      const data: CreateCooperatorDTO = req.body;
      const userId = req.userId;
      const exec = await create(data, userId);

      return res.status(201).json(exec);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const data: UpdateCooperatorDTO = req.body;
      const userId = req.userId;
      const exec = await update(data, userId);

      return res.status(201).json(exec);
    } catch (error) {
      console.log("Erro", error);
      return res.status(400).json(error);
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const exec = await login(email, password);

      return res.status(200).json(exec);
    } catch (error) {
      return res.status(401).json(error);
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const storeId = Number(req.params.storeId);
      const exec = await getAll(storeId);

      return res.status(200).json(exec);
    } catch (error) {
      return res.status(401).json(error);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const exec = await getById(id);

      return res.status(200).json(exec);
    } catch (error) {
      return res.status(401).json(error);
    }
  }

  static async getByEmail(req: Request, res: Response) {
    try {
      const email = req.params.email;
      const exec = await getByEmail(email);

      return res.status(200).json(exec);
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
