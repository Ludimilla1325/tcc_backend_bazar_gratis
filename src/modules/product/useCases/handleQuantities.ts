import { Prisma, Product } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { encryptar } from "../../../Utils/encryptar";

export async function handleQuantities(
  id: number,
  quantity: number
): Promise<Product[]> {
  // Verificar se o usuário já existe
  const products: Product[] = await prisma.$queryRaw(
    Prisma.sql`update Produto set quantidade =  ((select DISTINCT quantidade where id = ${id}) + ${quantity}) where id = ${id}`
  );

  return products;
}
