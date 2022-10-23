import { Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ICart } from "../dtos/ICart";
export async function getAll(appointmentId: number) {
  const list: ICart[] = await prisma.$queryRaw(
    Prisma.sql`  select Compra.id, Compra.produtoId,Compra.quantidade,Produto.nome,Produto.descricao, Produto.valor from Compra inner join Produto on Produto.id = produtoId where agendamentoId = ${appointmentId};
        `
  );

  return list;
}
