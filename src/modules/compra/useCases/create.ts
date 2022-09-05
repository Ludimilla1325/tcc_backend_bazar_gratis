import { Compra } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ICreateCompra } from "../dtos/ICreateCompra";
export async function create({
  agendamentoId,
  produtoId,
  quantidade,
}: ICreateCompra): Promise<Compra> {
  const query = await prisma.compra.create({
    data: {
      agendamentoId: Number(agendamentoId),
      produtoId:Number(produtoId),
      quantidade:Number(quantidade),
    },
  });
  return query;
}
