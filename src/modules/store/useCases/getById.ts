import { prisma } from "../../../Prisma/client";


export async function getById(id:number) {
  // Verificar se o usuário já existe

  const store = await prisma.store.findFirst({where:{ id}});
  return store;
}
