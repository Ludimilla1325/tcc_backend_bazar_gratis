import jwt from "jsonwebtoken";
import { prisma } from "../../../Prisma/client";
import { secret } from "../../../Utils/tokenSecret";

export async function verifyResetPass(id: string, token: string) {
  const userAlreadyExists = await prisma.client.findFirst({
    where: {
      id: +id,
    },
  });

  console.log("user", token, userAlreadyExists);

  if (!userAlreadyExists) {
    return {
      sucess: false,
      data: null,
      message: "Usuãrio não encontrado",
    };
  }

  const secretKey = secret + userAlreadyExists.password;

  try {
    const verify = jwt.verify(token, secretKey);
    return {
      sucess: true,
      data: verify,
      message: "Verificado",
    };
  } catch (error) {
    console.log("err", error);

    return {
      sucess: false,
      data: null,
      message: "Não Verificado",
    };
  }
}
