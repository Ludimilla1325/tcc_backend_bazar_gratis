import { Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function updatePoints(id: number, quantity: number) {
  const up = await prisma.client.update({
    where: { id: id },
    data: {
      points: +quantity,
    },
  });

  return up;
}
