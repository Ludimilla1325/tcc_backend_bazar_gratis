import { Request, Response } from "express";
import {
  create,
  getAll,
  confirmDelivery,
} from "../modules/appointment_client/useCases";
import { ICreateAppointmentClient } from "../modules/appointment_client/dtos/ICreateAgendamentoCliente";
export class AppointmentClientController {
  async create(req: Request, res: Response) {
    const { appointmentId, clientId, delivered }: ICreateAppointmentClient =
      req.body;
    try {
      const useCase = await create({ appointmentId, clientId, delivered });

      return res.status(201).json(useCase);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    const clientId = Number(req.params.clientId);
    try {
      const list = await getAll(clientId);

      return res.status(200).json(list);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async confirmarEntrega(req: Request, res: Response) {
    const agendamento_cliente_id = Number(req.params.agendamento_cliente_id);
    try {
      const list = await confirmDelivery(agendamento_cliente_id);

      return res.status(200).json(list);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
