import { Prisma, Produto } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { encryptar } from "../../../Utils/encryptar";

export async function handlePontos(id: number, quantidade: number) {
 
  const up = await prisma.$queryRaw(
    Prisma.sql`update Cliente set pontos =  ((select DISTINCT pontos where id = ${id}) + ${quantidade}) where id = ${id}`
  );

  return up;
}
