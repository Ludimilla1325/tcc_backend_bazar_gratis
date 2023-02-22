import { prisma } from "../../../Prisma/client";

export async function getAll() {
  const stores = await prisma.store.findMany({});

  return {
    sucess: true,
    data: stores,
    message: null,
  };
}
