import { Prisma, Product } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export class getAllProducts {
  async execute(storeId: number) {
    const products: Product[] = await prisma.$queryRaw(
      Prisma.sql`select p.id, p.name , p.photo, p.categoryId , p.value , p.quantity , 
      p.storeId , c.name  as categoria from Product p
      inner join Category c on p.categoryId  = c.id where p.storeId = ${storeId} order by c.name, p.name;`
    );

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
        message: "Problema em selecionar todos os produtos",
      };
    }
  }
}
