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
    throw "Usuário não encontrado!";
  }

  const validatePass = await compare(password, userAlreadyExists.password);
  console.log("chegueiaqui");
  if (validatePass) {
    console.log("chegueiaqui");
    const token = jwt.sign({ id: userAlreadyExists.id }, secret, {
      expiresIn: 36000,
    });
    return {
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
    };
  }

  throw "Combinações Inválidas!";
}
