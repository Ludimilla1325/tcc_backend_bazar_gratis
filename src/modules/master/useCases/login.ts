import { prisma } from "../../../Prisma/client";
import { LoginMasterDto } from "../dtos/LoginMasterDTO";
import { hash, compare } from "../../../Utils/hashUtils";
import { secret } from "../../../Utils/tokenSecret";
import jwt from "jsonwebtoken";

export async function login({ email, password }: LoginMasterDto) {
  // Buscar Usuário
  const userAlreadyExists = await prisma.master.findFirst({
    where: {
      email: email,
    },
  });

  if (!userAlreadyExists) {
    throw "Usuário não encontrado!";
  }

  const validatePass = await compare(password, userAlreadyExists.password);
  console.log("chegueiaqui");
  if (validatePass) {
    console.log("chegueiaqui");
    const token = jwt.sign({ id: userAlreadyExists.id, storeId:0 }, secret, {
      expiresIn: 36000,
    });
    return {
      user: {
        id: userAlreadyExists.id,
        email: userAlreadyExists.email,
        name: userAlreadyExists.name,
      },
      token,
    };
  }


  throw "Combinações Inválidas!";
}
