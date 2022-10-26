import { prisma } from "../../../Prisma/client";

export async function deleteProduct(storeId: number, productId: number) {
  const query = await prisma.product.deleteMany({
    where: {
      id: productId,
      storeId,
    },
  });
  if (query) {
    return {
      sucess: true,
      data: null,
      message: "Product deleted with sucess",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problem in delete product",
    };
  }

  return query;
}
