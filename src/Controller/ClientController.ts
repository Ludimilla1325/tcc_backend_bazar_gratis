import { Request, Response } from "express";
import { CreateUserUseCase } from "../Modules/client/useCases/createUserUseCase";
import { ClientDTO } from "../Modules/client/dtos/ClientDTO";
import { login } from "../Modules/client/useCases/login";
import { findByEmail } from "../Modules/client/useCases/findClientByEmail";
import { updateClient } from "../Modules/client/useCases/updateClient";
import { updatePassword } from "../Modules/client/useCases/updatePassword";
import { updatePoints } from "../Modules/client/useCases/handlePoints";
import { sendLinkToResetPass } from "../Modules/client/useCases/forgotPassUseCase";
import { verifyResetPass } from "../Modules/client/useCases/verifyResetPassUseCase";
import { resetPass } from "../Modules/client/useCases/resetPassUseCase copy";

export class ClienteController {
  static async criar(req: Request, res: Response) {
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

  static async login(req: Request, res: Response) {
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

  static async sendLinkToResetPass(req: Request, res: Response) {
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

  static async verifyResetPass(req: Request, res: Response) {
    const { id, token } = req.params;

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

  static async resetPass(req: Request, res: Response) {
    const { id, token } = req.params;
    const { password, confirmPassword } = req.body;

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

  static async findClientByEmail(req: Request, res: Response) {
    try {
      const client = await findByEmail(req.params.email);

      return res.status(200).json(client);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
  static async update(req: Request, res: Response) {
    const { name, email, phone, cep, storeId }: ClientDTO = req.body;
    try {
      const result = await updateClient(name, email, phone, cep, storeId);

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async updatePass(req: Request, res: Response) {
    const { email, oldPassword, newPassword } = req.body;
    try {
      const result = await updatePassword(email, oldPassword, newPassword);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  static async updatePoints(req: Request, res: Response) {
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
