import { prisma } from "../../../Prisma/client";


export async function getAll() {
  // Verificar se o usuário já existe

  const stores = await prisma.store.findMany({});
  return stores;
}
