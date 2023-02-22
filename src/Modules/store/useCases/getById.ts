import { prisma } from "../../../Prisma/client";

export async function getById(id: number) {
  const store = await prisma.store.findFirst({ where: { id } });
  return {
    sucess: true,
    data: store,
    message: null,
  };
}
