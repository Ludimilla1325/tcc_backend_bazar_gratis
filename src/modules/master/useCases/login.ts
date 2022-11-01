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
    return {
      sucess: false,
      data: null,
      message: "Usuãrio não encontrado",
    };
  }

  const validatePass = await compare(password, userAlreadyExists.password);
  console.log("chegueiaqui");
  if (validatePass) {
    console.log("chegueiaqui");
    const token = jwt.sign({ id: userAlreadyExists.id, storeId:0 }, secret, {
      expiresIn: 36000,
    });

    return {
      sucess: true,
      data: {
        id: userAlreadyExists.id,
        email: userAlreadyExists.email,
        name: userAlreadyExists.name,
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
