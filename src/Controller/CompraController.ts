import { Request, Response } from "express";
import { create, getAll } from "../modules/compra/useCases";
import { ICreateCompra } from "../modules/compra/dtos/ICreateCompra";
export class CompraController {
  async create(req: Request, res: Response) {
    const { agendamentoId, produtoId, quantidade }: ICreateCompra = req.body;
    try {
      const useCase = await create({ agendamentoId, produtoId, quantidade });

      return res.status(201).json(useCase);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    const agenda_cliente_id = Number(req.params.agenda_cliente_id);
    try {
      const list = await getAll(agenda_cliente_id);

      return res.status(200).json(list);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
