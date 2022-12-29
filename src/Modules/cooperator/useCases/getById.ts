import { prisma } from "../../../Prisma/client";

export async function getById(id: number) {
  // Verificar se o usuário já existe

  const store = await prisma.cooperator.findFirst({
    where: { id },
    include: { Store: true },
  });

  return {
    sucess: true,
    data: store,
    message: null,
  };
}
