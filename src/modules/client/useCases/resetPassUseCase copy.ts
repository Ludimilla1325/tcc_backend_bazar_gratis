import jwt from "jsonwebtoken";
import { prisma } from "../../../Prisma/client";
import { hash } from "../../../Utils/hashUtils";
import { secret } from "../../../Utils/tokenSecret";

export async function resetPass(
  id: string,
  token: string,
  password: string,
  confirmPass: string
) {
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

    if (password === confirmPass) {
      const newPass = hash(password);
      await prisma.client.update({
        where: { id: userAlreadyExists.id },
        data: {
          password: newPass,
        },
      });
    }
    return {
      sucess: true,
      data: null,
      message: "Senha atualizada com sucesso!",
    };
  } catch (error) {
    console.log("err", error);

    return {
      sucess: false,
      data: null,
      message: "Não foi possível atualizar a senha",
    };
  }
}
