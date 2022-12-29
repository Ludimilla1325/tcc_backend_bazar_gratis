import { Request, Response } from "express";
import { create, update, login } from "../Modules/master/useCases";
import {
  CreateMasterDTO,
  LoginMasterDto,
  UpdateMasterDTO,
} from "../Modules/master/dtos";

export class MasterController {
  static async criar(req: Request, res: Response) {
    try {
      const data: CreateMasterDTO = req.body;
      const exec = await create(data);

      return res.status(201).json(exec);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const data: UpdateMasterDTO = req.body;
      const exec = await update(data);

      return res.status(201).json(exec);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const data: LoginMasterDto = req.body;
      const exec = await login(data);

      return res.status(200).json(exec);
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
