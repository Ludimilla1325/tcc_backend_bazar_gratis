import { Request, Response } from "express";
import { create, update, getById, getAll } from "../modules/store/useCases";
import { CreateStoreDTO, UpdateStoreDTO } from "../modules/store/dtos";
export class StoreController {
  static async create(req: Request, res: Response) {
    try {
      const data: CreateStoreDTO = req.body;
      const masterId = req.userId;
      const exec = await create(data, masterId);

      return res.status(201).json(exec);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const data: UpdateStoreDTO = req.body;
      const masterId = req.userId;
      const exec = await update(data, masterId);

      return res.status(201).json(exec);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async get(req: Request, res: Response) {
    try {
      console.log(req.role)
      if (req.role == "master") {
        const exec = await getAll();

        return res.status(200).json(exec);
      } else {
        return res.status(200).json({
          sucess: false,
          data: null,
          message: "Voce nao possui permissao para acessar esta rota",
        });
      }
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
}
