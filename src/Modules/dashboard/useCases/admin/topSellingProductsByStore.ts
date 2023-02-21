import { Prisma } from "@prisma/client";
import { prisma } from "../../../../Prisma/client";

export async function topSellingProductsByStore(storeId: number) {
  interface Products {
    productId: number;
    soma: number;
    name: string;
  }

  try {
    const topProducts: Array<Products> = await prisma.$queryRaw(
      Prisma.sql`select p.productId, p2.name as name, count(p.productId)*count(p.quantity) as soma from Purchase p
      inner join Product p2 on p.productId = p2.id 
      where p2.storeId = ${storeId}
      group by p.productId order by soma DESC limit 5 `
    );

    const total = topProducts.reduce((total, elem) => {
      return Number(total) + Number(elem.soma);
    }, 0);

    const top = topProducts.map((elem) => {
      return {
        title: elem.name,
        value: +((Number(elem.soma) * 100) / total).toFixed(2),
      };
    }, 0);

    return {
      sucess: true,
      data: top,
      message: null,
    };
  } catch (error) {
    throw new Error(`Erro: ${error}`);
  }
}
