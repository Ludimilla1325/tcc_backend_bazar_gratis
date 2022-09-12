import { Agendamento_cliente } from "@prisma/client";
import { handleQuantidades } from "../../produto/useCases/handleQuantidades";
import { prisma } from "../../../Prisma/client";
import { getAll } from "../../compra/useCases/getAll";
import { handlePontos } from "../../cliente/useCases/handlePontos";

export async function confirmarEntrega(id: number) {
  const agendamento_cliente = await prisma.agendamento_cliente.findFirst({
    where: { id },
  });

  if (agendamento_cliente) {
    const query = await prisma.agendamento_cliente.update({
      data: { entregue: true },
      where: { id },
    });

    const lista = await getAll(agendamento_cliente.agendamentoId);

    
    return query;
  }

  throw "Nenhum Agendamento com este ID";
}
