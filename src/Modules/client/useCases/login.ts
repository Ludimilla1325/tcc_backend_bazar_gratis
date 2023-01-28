import { prisma } from "../../../Prisma/client";
import { ClientDTO } from "../dtos/ClientDTO";
import { hash } from "../../../Utils/hashUtils";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { secret } from "../../../Utils/tokenSecret";

export async function login(email: string, password: string) {
  // Verificar se o usuário já existe
  const userAlreadyExists = await prisma.client.findFirst({
    where: {
      email: email,
    },
  });

  if (!userAlreadyExists) {
    return { sucess: false, data: null, message: "Usuário não encontrado" };
  }

  const validatePass = await compare(password, userAlreadyExists.password);
  if (validatePass) {
    const token = jwt.sign(
      { id: userAlreadyExists.id, role: "admin", storeId: 0 },
      secret,
      {
        expiresIn: 36000,
      }
    );
    return {
      sucess: true,
      data: {
        user:userAlreadyExists,
        token,
      },
      message: null,
    };
  } else {
    return { sucess: false, data: null, message: "Senha incorreta" };
  }
}
