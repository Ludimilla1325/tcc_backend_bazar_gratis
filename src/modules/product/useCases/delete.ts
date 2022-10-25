import { prisma } from "../../../Prisma/client";

export async function deleteProduct(storeId: number, productId: number) {
  const query = await prisma.product.deleteMany({
    where: {
      id: productId,
      storeId,
    },
  });

  return query;
}
