import { prisma } from "../../../Prisma/client";
export async function findByStoreId(storeId: number) {
  const user = await prisma.client.findMany({
    where: {
      storeId: storeId,
    },
  });

  if (!user) {
    return { sucess: false, data: [], message: "Usuário não encontrado" };
  } else {
    return { sucess: true, data: user, message: null };
  }
}
