import { Agendamento_cliente } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ICreateAgendamentoCliente } from "../dtos/ICreateAgendamentoCliente";

export async function getAll(
  clienteId: number
): Promise<Agendamento_cliente[]> {
  const lista = await prisma.agendamento_cliente.findMany({
    where: { clienteId },
  });
  return lista;
}
