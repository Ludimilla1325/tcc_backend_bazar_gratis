import { Request, Response } from "express";
import { CreateUserUseCase } from "../modules/cliente/useCases/createUserUseCase";
import { CreateUserDTO } from "../modules/cliente/dtos/CreateUserDTO";
import { login } from "../modules/cliente/useCases/login";
export class ClienteController {
  async criar(req: Request, res: Response) {
    const {
      nome,
      email,
      telefone,
      cpf,
      cep,
      lojaId,
      senha,
      pontos,
    }: CreateUserDTO = req.body;
    try {
      const createUserUseCase = new CreateUserUseCase();

      const result = await createUserUseCase.execute({
        nome,
        email,
        telefone,
        cpf,
        cep,
        lojaId,
        senha,
        pontos,
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
