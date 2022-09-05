import { Agendamento_cliente } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function confirmarEntrega(id: number): Promise<Agendamento_cliente> {
  const query = await prisma.agendamento_cliente.update({
    data: { entregue: true },
    where: { id },
  });
  return query;
}
