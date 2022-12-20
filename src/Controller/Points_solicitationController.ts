import { Request, Response } from "express";
import { IPointsSolicitation } from "../modules/points_solicitation/dtos/pointsSolicitation";
import { createPointsSolicitation } from "../modules/points_solicitation/useCases/create";
import { deletePointsSolicitation } from "../modules/points_solicitation/useCases/delete";
import { getAll } from "../modules/points_solicitation/useCases/getAll";
import { getOnePointSolicitation } from "../modules/points_solicitation/useCases/getOne";
import {
  updatePointsSolicitation,
  updatePointsSolicitationAcceptOrNot,
} from "../modules/points_solicitation/useCases/update";

export class PointsSolicitationController {
  async create(req: Request, res: Response) {
    const { clientId, quantity, client_justification }: IPointsSolicitation =
      req.body;

    const request_date = new Date();
    const status = "SOLICITAÇÃO REALIZADA";

    console.log(
      "test",
      clientId,
      quantity,
      client_justification,
      status,
      request_date
    );

    try {
      const result = await createPointsSolicitation({
        clientId,
        quantity,
        request_date,
        status,
        client_justification,
      });

      console.log("result", result);

      return res.status(200).json(result);
    } catch (error) {
      console.log("error", error);

      return res.status(400).json(error);
    }
  }

  async getOne(req: Request, res: Response) {
    const pointsSolicitationId = +req.params.id;

    try {
      const result = await getOnePointSolicitation(pointsSolicitationId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      console.log({
        clientId: Number(req.query.clientId),
        loja_id: Number(req.query.loja_id),
      })
      const result = await getAll({
        clientId: Number(req.query.clientId),
        loja_id: Number(req.query.loja_id),
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
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

  async updatePointsSolicitationAcceptOrNot(req: Request, res: Response) {
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

  async delete(req: Request, res: Response) {
    const pointsSolicitationId = +req.params.id;
    try {
      const result = await deletePointsSolicitation(pointsSolicitationId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
