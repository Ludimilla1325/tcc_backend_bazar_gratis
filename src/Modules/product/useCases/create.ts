import { Product } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
export async function createProduct(
  name: string,
  description: string,
  photo: string,
  categoryId: number,
  value: number,
  quantity: number,
  storeId: number
) {
  const query = await prisma.product.create({
    data: {
      name,
      description,
      photo,
      categoryId:Number(categoryId),
      value:Number(value),
      quantity:Number(quantity),
      storeId:Number(storeId),
    },
  });

  if (query) {
    return {
      sucess: true,
      data: null,
      message: "Produto adicionado com sucesso",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema ao adicionar produto",
    };
  }
}
