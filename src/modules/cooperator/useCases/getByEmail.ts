import { prisma } from "../../../Prisma/client";


export async function getByEmail(email:string) {
  // Verificar se o usuário já existe

  const store = await prisma.cooperator.findFirst({where:{ email}});
  return store;
}
