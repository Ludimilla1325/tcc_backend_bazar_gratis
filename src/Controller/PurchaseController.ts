import { Request, Response } from "express";
import { create, getAll, delet } from "../Modules/purchase/useCases";
import { ICreatePurchase } from "../Modules/purchase/dtos/CreatePurchaseDTO";

export class PurchaseController {
  static async create(req: Request, res: Response) {
    const body: ICreatePurchase = req.body;
    try {
      const useCase = await create(body, Number(req.userId));

      return res.status(201).json(useCase);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async getAll(req: Request, res: Response) {
    const appointment_client_id = Number(req.params.appointment_client_id);
    try {
      const list = await getAll(appointment_client_id);

      return res.status(200).json(list);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async delete(req: Request, res: Response) {
    const purchase_id = Number(req.params.purchase_id);
    try {
      return res.status(200).json(await delet(purchase_id, Number(req.userId)));
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
