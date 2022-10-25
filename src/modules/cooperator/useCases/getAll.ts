import { prisma } from "../../../Prisma/client";

export async function getAll(storeId: number) {
  // Verificar se o usuário já existe

  const cooperators = await prisma.cooperator.findMany({ where: { storeId } });
  return cooperators;
}
