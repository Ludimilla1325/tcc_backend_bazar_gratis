import { Request, Response } from "express";
import { create, update, getById, getAll } from "../Modules/store/useCases";
import { CreateStoreDTO, UpdateStoreDTO } from "../Modules/store/dtos";
import { deleteById } from "../Modules/store/useCases/delete";

export class StoreController {
  static async create(req: Request, res: Response) {
    try {
      const data: CreateStoreDTO = req.body;
      const masterId = req.userId;
      const exec = await create(data, masterId);

      return res.status(201).json(exec);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const data: UpdateStoreDTO = req.body;
      const masterId = req.userId;
      const exec = await update(data, +masterId);

      return res.status(201).json(exec);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const exec = await getAll();

      return res.status(200).json(exec);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const exec = await getById(id);

      return res.status(200).json(exec);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async deleteById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const exec = await deleteById(id);

      return res.status(200).json(exec);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
