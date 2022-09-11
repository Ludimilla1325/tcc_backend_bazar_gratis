import { Prisma, Produto } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { encryptar } from "../../../Utils/encryptar";

export class getAllProdutos {
  async execute(loja_id: number): Promise<Produto[]> {
   
    const produtos:Produto[] = await prisma.$queryRaw(
      Prisma.sql`select Produto.id, Produto.nome, Produto.foto, Produto.categoriaId, Produto.valor, Produto.quantidade, Produto.lojaId, Categoria.nome as categoria from Produto inner join Categoria on categoriaId = Categoria.id where lojaId = ${loja_id} order by Categoria.nome, Produto.nome;`
    );

    console.log(produtos)
    return produtos;
  }
}
