import { Request, Response } from "express";
import {
  create,
  getAll,
  confirmarEntrega,
} from "../modules/agendamento_cliente/useCases";
import { ICreateAgendamentoCliente } from "../modules/agendamento_cliente/dtos/ICreateAgendamentoCliente";
export class AgendamentoClienteController {
  async create(req: Request, res: Response) {
    const { agendamentoId, clienteId, entregue }: ICreateAgendamentoCliente =
      req.body;
    try {
      const useCase = await create({ agendamentoId, clienteId, entregue });

      return res.status(201).json(useCase);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    const clienteId = Number(req.params.clienteId);
    try {
      const list = await getAll(clienteId);

      return res.status(200).json(list);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async confirmarEntrega(req: Request, res: Response) {
    const agendamento_cliente_id = Number(req.params.agendamento_cliente_id);
    try {
      const list = await confirmarEntrega(agendamento_cliente_id);

      return res.status(200).json(list);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
