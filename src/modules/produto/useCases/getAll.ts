import { Prisma, Produto } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { encryptar } from "../../../Utils/encryptar";

export class getAllProdutos {
  async execute(loja_id: number): Promise<Produto[]> {
    // Verificar se o usuário já existe
    const produtos:Produto[] = await prisma.$queryRaw(
      Prisma.sql`select * from Produto inner join Categoria on categoriaId = Categoria.id where lojaId = ${loja_id} order by Categoria.nome, Produto.nome;`
    );

    return produtos;
  }
}
