import { Compra } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { handlePontos } from "../../cliente/useCases/handlePontos";
import { handleQuantidades } from "../../produto/useCases/handleQuantidades";
import { ICreateCompra } from "../dtos/ICreateCompra";
export async function create({
  agendamentoId,
  produtoId,
  quantidade,
}: ICreateCompra): Promise<Compra> {
  const produto = await prisma.produto.findFirst({
    where: {
      id: produtoId,
    },
  });

  if (produto) {
    if (produto.quantidade < quantidade) {
      throw "Quantidade indisponível!";
    }

    const query = await prisma.compra.create({
      data: {
        agendamentoId: Number(agendamentoId),
        produtoId: Number(produtoId),
        quantidade: Number(quantidade),
      },
    });

    const t = await handleQuantidades(produtoId, -quantidade);
    const pontos = await handlePontos(2, -(quantidade * produto?.valor));

    return query;
  }
  throw "Não foi possível registrar esta compra";
}
