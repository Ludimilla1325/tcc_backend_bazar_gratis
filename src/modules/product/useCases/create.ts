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
      categoryId,
      value,
      quantity,
      storeId,
    },
  });

  if (query) {
    return {
      sucess: true,
      data: null,
      message: "Product added with sucess",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problem in add product",
    };
  }
}
