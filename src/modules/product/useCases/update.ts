import { Product } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
export async function updateProduct(
  productId: number,
  name: string,
  description: string,
  photo: string,
  categoryId: number,
  value: number,
  quantity: number,
  storeId: number
) {
  const query = await prisma.product.update({
    where: { id: productId },
    data: {
      name,
      description,
      photo,
      categoryId,
      value,
      quantity,
      storeId,
    },
  });

  if (query) {
    return {
      sucess: true,
      data: query,
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problem in update product",
    };
  }
}
