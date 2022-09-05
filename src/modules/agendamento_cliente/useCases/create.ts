import { Agendamento_cliente } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ICreateAgendamentoCliente } from "../dtos/ICreateAgendamentoCliente";

export async function create({
  agendamentoId,
  clienteId,
  entregue,
}: ICreateAgendamentoCliente): Promise<Agendamento_cliente> {
  console.log(agendamentoId, clienteId, entregue);
  const query = await prisma.agendamento_cliente.create({
    data: {
      agendamentoId: Number(agendamentoId),
      clienteId: Number(clienteId),
      entregue: false
    },
  });
  return query;
}
