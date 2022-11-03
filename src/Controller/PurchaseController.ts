import { Request, Response } from "express";
import { create, getAll, delet } from "../modules/purchase/useCases";
import { ICreatePurchase } from "../modules/purchase/dtos/ICreatePurchase";
export class PurchaseController {
  async create(req: Request, res: Response) {
    const body: ICreatePurchase = req.body;
    try {
      const useCase = await create(body, Number(req.userId));

      return res.status(201).json(useCase);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    const appointment_client_id = Number(req.params.appointment_client_id);
    try {
      const list = await getAll(appointment_client_id);

      return res.status(200).json(list);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    const purchase_id = Number(req.params.purchase_id);
    try {
      return res.status(200).json(await delet(purchase_id, Number(req.userId)));
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
