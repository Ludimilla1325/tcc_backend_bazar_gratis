import { Request, Response } from "express";
import { CreateUserUseCase } from "../modules/client/useCases/createUserUseCase";
import { ClientDTO } from "../modules/client/dtos/ClientDTO";
import { login } from "../modules/client/useCases/login";
import { findByEmail } from "../modules/client/useCases/findClientByEmail";
import { updateClient } from "../modules/client/useCases/updateClient";
import { updatePassword } from "../modules/client/useCases/updatePassword";
import { updatePoints } from "../modules/client/useCases/handlePoints";
import { sendLinkToResetPass } from "../modules/client/useCases/forgotPassUseCase";
import { verifyResetPass } from "../modules/client/useCases/verifyResetPassUseCase";
import { resetPass } from "../modules/client/useCases/resetPassUseCase copy";
export class ClienteController {
  async criar(req: Request, res: Response) {
    const { name, email, phone, cpf, cep, storeId, password }: ClientDTO =
      req.body;
    try {
      const createUserUseCase = new CreateUserUseCase();

      const points = 100;

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

      console.log(result);

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async sendLinkToResetPass(req: Request, res: Response) {
    const { email }: ClientDTO = req.body;
    try {
      const result = await sendLinkToResetPass(email);
      if (result.sucess) {
        return res.status(200).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async verifyResetPass(req: Request, res: Response) {
    const { id, token } = req.params;
    console.log("id", id, token);

    try {
      const result = await verifyResetPass(id, token);
      console.log(result.data);

      if (result.sucess && result.data) {
        res.render("index", {
          status: "Not Verified",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async resetPass(req: Request, res: Response) {
    const { id, token } = req.params;
    const { password, confirmPassword } = req.body;
    console.log("id", id, token);

    try {
      const result = await resetPass(id, token, password, confirmPassword);
      if (result?.sucess) {
        return res.status(200).json(result.message);
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async findClientByEmail(req: Request, res: Response) {
    try {
      const client = await findByEmail(req.params.email);

      return res.status(200).json(client);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
  async update(req: Request, res: Response) {
    const { name, email, phone, cep, storeId }: ClientDTO = req.body;
    try {
      const result = await updateClient(name, email, phone, cep, storeId);

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
