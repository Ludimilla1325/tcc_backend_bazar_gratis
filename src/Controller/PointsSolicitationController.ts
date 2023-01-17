import { Request, Response } from "express";
import { IPointsSolicitation } from "../Modules/points_solicitation/dtos/PointsSolicitationDTO";
import { createPointsSolicitation } from "../Modules/points_solicitation/useCases/create";
import { deletePointsSolicitation } from "../Modules/points_solicitation/useCases/delete";
import { getAll } from "../Modules/points_solicitation/useCases/getAll";
import { getOnePointSolicitation } from "../Modules/points_solicitation/useCases/getOne";
import {
  updatePointsSolicitation,
  updatePointsSolicitationAcceptOrNot,
} from "../Modules/points_solicitation/useCases/update";

export class PointsSolicitationController {
  static async create(req: Request, res: Response) {
    const { clientId, quantity, client_justification }: IPointsSolicitation =
      req.body;

    const request_date = new Date();
    const status = "EM ANDAMENTO";

    try {
      const result = await createPointsSolicitation({
        clientId: +clientId,
        quantity: +quantity,
        request_date,
        status,
        client_justification,
      });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async getOne(req: Request, res: Response) {
    const pointsSolicitationId = +req.params.id;

    try {
      const result = await getOnePointSolicitation(pointsSolicitationId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const result = await getAll({
        clientId: Number(req.query.clientId),
        loja_id: Number(req.query.loja_id),
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async update(req: Request, res: Response) {
    const {
      clientId,
      quantity,
      request_date,
      status,
      employeeId,
      client_justification,
      employee_justification,
    }: IPointsSolicitation = req.body;
    const pointsSolicitationId = +req.params.id;
    try {
      const result = await updatePointsSolicitation(
        pointsSolicitationId,
        clientId,
        quantity,
        request_date,
        status,
        employeeId,
        client_justification,
        employee_justification
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async updatePointsSolicitationAcceptOrNot(
    req: Request,
    res: Response
  ) {
    const { status, employeeId, employee_justification }: IPointsSolicitation =
      req.body;
    const pointsSolicitationId = +req.params.id;
    try {
      const result = await updatePointsSolicitationAcceptOrNot(
        pointsSolicitationId,
        status,
        employeeId,
        employee_justification
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async delete(req: Request, res: Response) {
    const pointsSolicitationId = +req.params.id;
    try {
      const result = await deletePointsSolicitation(pointsSolicitationId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
