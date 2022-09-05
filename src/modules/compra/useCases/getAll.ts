import { Compra, Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ICarrinho } from "../dtos/ICarrinho";
export async function getAll(agendamentoId: number) {
    const lista:ICarrinho[] = await prisma.$queryRaw(
        Prisma.sql`  select Compra.id, Compra.produtoId,Compra.quantidade,Produto.nome,Produto.descricao, Produto.valor from Compra inner join Produto on Produto.id = produtoId where agendamentoId = ${agendamentoId};
        `
      );



  return lista;
}
