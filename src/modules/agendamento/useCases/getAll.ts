import { Prisma, Agendamento } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function getAll(loja_id: number): Promise<Agendamento[]> {
  const list: Agendamento[] = await prisma.agendamento.findMany({
    where: { lojaId: loja_id },
  });
  return list;
}
