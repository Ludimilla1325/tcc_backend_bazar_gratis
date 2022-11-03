import { prisma } from "../../../Prisma/client";

export async function getMany() {
  return await prisma.points_solicitation.findMany();
}
