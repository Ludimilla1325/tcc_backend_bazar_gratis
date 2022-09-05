import { Prisma, Produto } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { encryptar } from "../../../Utils/encryptar";

export async function handleQuantidades(
  id: number,
  quantidade: number
 
): Promise<Produto[]> {
  // Verificar se o usuário já existe
  const produtos: Produto[] = await prisma.$queryRaw(
    Prisma.sql`update Produto set quantidade =  ((select DISTINCT quantidade where id = ${id}) + ${quantidade}) where id = ${id}`
  );

  return produtos;
}
