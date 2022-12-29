import { prisma } from "../../../Prisma/client";
import { hash } from "../../../Utils/hashUtils";
import { compare } from "bcrypt";

export async function updatePassword(
  email: string,
  oldPass: string,
  newPassword: string
) {
  // Verificar se o usuário já existe
  const user = await prisma.cooperator.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return { sucess: false, data: null, message: "Cooperator not found" };
  }

  const validatePass = await compare(oldPass, user.password);
  if (validatePass) {
    newPassword = hash(newPassword);
    await prisma.cooperator.update({
      where: { email: email },
      data: {
        password: newPassword,
      },
    });
    return {
      sucess: true,
      data: null,
      message: "Senha alterada com sucesso",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Senha antiga inválida",
    };
  }
}
