import { Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function updatePoints(id: number, quantity: number) {
  const points = await prisma.$queryRaw(
    Prisma.sql`update Client set points =  ((select DISTINCT points where id = ${id}) + ${quantity}) where id = ${id}`
  );

  return points;
}
