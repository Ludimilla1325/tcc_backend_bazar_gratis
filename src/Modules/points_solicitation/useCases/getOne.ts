import { prisma } from "../../../Prisma/client";

export async function getOnePointSolicitation(id: number) {
  return await prisma.points_solicitation.findUnique({
    where: { id },
  });
}
