import { prisma } from "../../../Prisma/client";

export async function getAll() {
  const categories = await prisma.category.findMany();

  return {
    sucess: true,
    data: categories,
    message: null,
  };
}
