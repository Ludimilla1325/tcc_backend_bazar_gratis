import { Prisma, Product } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export class getOne {
  async execute(storeId: number, productId: number) {
    const products = await prisma.product.findFirst({
      where: { storeId: storeId, id: productId },
      include: { Category: true },
    });

    if (products) {
      return {
        sucess: true,
        data: products,
        message: null,
      };
    } else {
      return {
        sucess: false,
        data: null,
        message: "Problema ao selecionar o produto",
      };
    }
  }
}
