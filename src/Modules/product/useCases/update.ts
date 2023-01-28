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
  const data = photo? {
    name,
    description,
    photo,
    categoryId:Number(categoryId),
    value:Number(value),
    quantity:Number(quantity),
    storeId:Number(storeId),
  }:{
    name,
    description,
    categoryId:Number(categoryId),
    value:Number(value),
    quantity:Number(quantity),
    storeId:Number(storeId),
  }
  const query = await prisma.product.update({
    where: { id: productId },
    data: data,
  });

  if (query) {
    return {
      sucess: true,
      data: query,
      message: "Produto atualizado com sucesso",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema em atualizar o produtod",
    };
  }
}
