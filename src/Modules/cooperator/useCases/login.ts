import { prisma } from "../../../Prisma/client";
import { hash, compare } from "../../../Utils/hashUtils";
import { secret } from "../../../Utils/tokenSecret";
import jwt from "jsonwebtoken";

export async function login(email: string, password: string) {
  // Buscar Usuário
  const userAlreadyExists = await prisma.cooperator.findFirst({
    where: {
      email: email,
      active: true,
    },
  });

  if (!userAlreadyExists) {
    return {
      sucess: false,
      data: null,
      message: "Usuãrio não encontrado!",
    };
  }

  const validatePass = await compare(password, userAlreadyExists.password);
  if (validatePass) {
    const token = jwt.sign(
      {
        id: userAlreadyExists.id,
        role: userAlreadyExists.admin ? "admin" : "cooperator",
      },
      secret,
      {
        expiresIn: 36000,
      }
    );

    return {
      sucess: true,
      data: {
        user: {
          id: userAlreadyExists.id,
          email: userAlreadyExists.email,
          name: userAlreadyExists.name,
          cpf: userAlreadyExists.cpf,
          active: userAlreadyExists.active,
          admin: userAlreadyExists.admin,
          storeId: userAlreadyExists.storeId,
        },
        token,
      },
      message: null,
    };
  }

  return {
    sucess: false,
    data: null,
    message: "Combinações Inválidas!",
  };
}
