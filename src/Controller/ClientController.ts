import { Request, Response } from "express";
import { CreateUserUseCase } from "../modules/client/useCases/createUserUseCase";
import { ClientDTO } from "../modules/client/dtos/ClientDTO";
import { login } from "../modules/client/useCases/login";
import { findByEmail } from "../modules/client/useCases/findClientByEmail";
import { updateClient } from "../modules/client/useCases/updateClient";
import { updatePassword } from "../modules/client/useCases/updatePassword";
import { updatePoints } from "../modules/client/useCases/handlePoints";
export class ClienteController {
  async criar(req: Request, res: Response) {
    const {
      name,
      email,
      phone,
      cpf,
      cep,
      storeId,
      password,
      points,
    }: ClientDTO = req.body;
    try {
      const createUserUseCase = new CreateUserUseCase();

      const result = await createUserUseCase.execute({
        name,
        email,
        phone,
        cpf,
        cep,
        storeId,
        password,
        points,
      });

      result.password = "***";

      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async login(req: Request, res: Response) {
    const { email, password }: ClientDTO = req.body;
    try {
      const result = await login(email, password);

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async findClientByEmail(req: Request, res: Response) {
    const { email }: ClientDTO = req.body;
    try {
      const client = await findByEmail(email);

      return res.status(200).json(client);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
  async update(req: Request, res: Response) {
    const { name, email, phone, cep, storeId, points }: ClientDTO = req.body;
    try {
      const result = await updateClient(
        name,
        email,
        phone,
        cep,
        storeId,
        points
      );

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async updatePass(req: Request, res: Response) {
    const { email, oldPassword, newPassword } = req.body;
    try {
      const result = await updatePassword(email, oldPassword, newPassword);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async updatePoints(req: Request, res: Response) {
    const { id, points } = req.body;

    try {
      const result = await updatePoints(id, points);
      // @ts-expect-error
      delete result.password;
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
