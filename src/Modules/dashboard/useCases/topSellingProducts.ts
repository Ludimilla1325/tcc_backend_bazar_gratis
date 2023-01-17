import { Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function topSellingProducts() {
  const topProducts = await prisma.$queryRaw(
    Prisma.sql`select p.productId, p2.name, count(p.productId)*count(p.quantity) as soma from Purchase p
    inner join Product p2 on p.productId = p2.id group by p.productId order by soma DESC limit 5`
  );
  if (topProducts) {
    return {
      sucess: true,
      data: topProducts,
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema ao encontrar os produtos que mais saíram",
    };
  }
}
