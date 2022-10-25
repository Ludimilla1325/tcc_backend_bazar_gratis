import { Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function handlePoints(id: number, quantity: number) {
  const up = await prisma.$queryRaw(
    Prisma.sql`update Cliente set pontos =  ((select DISTINCT pontos where id = ${id}) + ${quantity}) where id = ${id}`
  );

  return up;
}
