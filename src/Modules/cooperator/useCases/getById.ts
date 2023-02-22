import { prisma } from "../../../Prisma/client";

export async function getById(id: number) {
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
