import { prisma } from "../../../Prisma/client";

export async function getAll(storeId: number) {
  const cooperators = await prisma.cooperator.findMany({ where: { storeId } });

  return {
    sucess: true,
    data: cooperators,
    message: null,
  };
}
