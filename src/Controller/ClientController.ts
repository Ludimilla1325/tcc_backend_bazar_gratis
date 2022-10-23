import { Request, Response } from "express";
import { CreateUserUseCase } from "../modules/client/useCases/createUserUseCase";
import { CreateUserDTO } from "../modules/client/dtos/CreateUserDTO";
import { login } from "../modules/client/useCases/login";
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
    }: CreateUserDTO = req.body;
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

      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async login(req: Request, res: Response) {
    const { email }: CreateUserDTO = req.body;
    try {
      const result = await login(email);

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
