import { prisma } from "../../../Prisma/client";

export async function checkMasterById(id: number) {
  const userAlreadyExists = await prisma.master.findFirst({
    where: {
      id,
    },
  });

  return userAlreadyExists;
}
