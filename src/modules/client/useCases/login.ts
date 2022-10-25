import { prisma } from "../../../Prisma/client";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { hash } from "../../../Utils/hashUtils";

export async function login(email: string) {
  // Verificar se o usuário já existe
  const userAlreadyExists = await prisma.client.findFirst({
    where: {
      email: email,
    },
  });

  
  return userAlreadyExists;
}
