import { Prisma, Product } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { encryptar } from "../../../Utils/encryptar";

export class getAllProducts {
  async execute(storeId: number): Promise<Product[]> {
    const products: Product[] = await prisma.$queryRaw(
      Prisma.sql`select Produto.id, Produto.nome, Produto.foto, 
      Produto.categoriaId, Produto.valor, Produto.quantidade, 
      Produto.lojaId, Categoria.nome as categoria from Produto 
      inner join Categoria on categoriaId = Categoria.id 
      where lojaId = ${storeId} order by Categoria.nome, Produto.nome;`
    );

    console.log(products);
    return products;
  }
}
