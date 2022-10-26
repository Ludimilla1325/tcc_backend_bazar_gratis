import { prisma } from "../../../Prisma/client";
import { ClientDTO } from "../dtos/ClientDTO";
import { hash } from "../../../Utils/hashUtils";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { secret } from "../../../Utils/tokenSecret";

export async function updatePassword(
  email: string,
  oldPass: string,
  newPassword: string
) {
  // Verificar se o usuário já existe
  const user = await prisma.client.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return { sucess: false, data: null, message: "User not found" };
  }

  const validatePass = await compare(oldPass, user.password);
  if (validatePass) {
    newPassword = hash(newPassword);
    await prisma.client.update({
      where: { email: email },
      data: {
        password: newPassword,
      },
    });
    return {
      sucess: true,
      data: null,
      message: "Password changed with sucess",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Old Password is not correct",
    };
  }
}
