import { prisma } from "../../../Prisma/client";
import fs from "fs";
import { images_path } from "../../../Utils/paths";
export async function deleteProduct(storeId: number, productId: number) {

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    
    },
  });
  const query = await prisma.product.deleteMany({
    where: {
      id: productId,
      storeId,
    },
  });
  if (query) {
    fs.unlink(images_path+"/"+product?.photo,()=>{});

    return {
      sucess: true,
      data: null,
      message: "Produto deletado com sucesso",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema ao deletar o produto",
    };
  }

  return query;
}
