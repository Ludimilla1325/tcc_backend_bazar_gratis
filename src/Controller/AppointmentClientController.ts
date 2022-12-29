import { Request, Response } from "express";
import {
  create,
  getAll,
  confirmDelivery,
  del,
  update,
} from "../Modules/appointment_client/useCases";
import { ICreateAppointmentClient } from "../Modules/appointment_client/dtos/CreateAgendamentoClienteDTO";

export class AppointmentClientController {
  static async create(req: Request, res: Response) {
    const body: ICreateAppointmentClient = req.body;
    try {
      const useCase = await create(body);

      return res.status(201).json(useCase);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async update(req: Request, res: Response) {
    const body: ICreateAppointmentClient = req.body;
    try {
      const useCase = await create(body);

      return res.status(201).json(useCase);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async getAll(req: Request, res: Response) {
    const clientId = Number(req.userId);
    try {
      const list = await getAll(clientId);

      return res.status(200).json(list);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async confirmDelivery(req: Request, res: Response) {
    const agendamento_cliente_id = Number(req.params.agendamento_cliente_id);
    try {
      const list = await confirmDelivery(agendamento_cliente_id);

      return res.status(200).json(list);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async delete(req: Request, res: Response) {
    const agendamento_cliente_id = Number(req.params.agendamento_cliente_id);
    try {
      const list = await del(agendamento_cliente_id);

      return res.status(200).json(list);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
