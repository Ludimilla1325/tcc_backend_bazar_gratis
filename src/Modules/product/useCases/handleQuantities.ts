import { Prisma, Product } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function handleQuantities(
  id: number,
  quantity: number
): Promise<Product[]> {
  const products: Product[] = await prisma.$queryRaw(
    Prisma.sql`update Product set quantity =  ((select DISTINCT quantity where id = ${id}) + ${quantity}) where id = ${id}`
  );

  return products;
}
