import { Request, Response } from "express";
import { CreateAppointmentDTO } from "../Modules/appointment/dtos/CreateAppointmentDTO";
import { getAll, create, del, update } from "../Modules/appointment/useCases";

export class AppointmentController {
  static async list(req: Request, res: Response) {
    const loja_id = Number(req.params.loja_id);
    try {
      const lista = await getAll(loja_id);

      return res.status(200).json(lista);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async create(req: Request, res: Response) {
    const body: CreateAppointmentDTO = req.body;
    try {
      const data = await create(body);

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const data = await del(id);

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async update(req: Request, res: Response) {
    const body: CreateAppointmentDTO = req.body;
    try {
      const data = await update(body);

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
