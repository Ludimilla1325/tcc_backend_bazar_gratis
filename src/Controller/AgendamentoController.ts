import { Request, Response } from "express";
import { getAll } from "../modules/agendamento/useCases";
export class AgendamentoController {
  async listar(req: Request, res: Response) {
    const loja_id = Number(req.params.loja_id);
    try {
      const lista = await getAll(loja_id);

      return res.status(200).json(lista);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
