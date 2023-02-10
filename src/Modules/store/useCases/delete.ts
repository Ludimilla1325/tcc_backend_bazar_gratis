import { prisma } from "../../../Prisma/client";
import { findByStoreId } from "../../client/useCases/findByIStored";
import { getAll } from "../../cooperator/useCases";
import { getAllProducts } from "../../product/useCases";

export async function deleteById(id: number) {
  // Verificar se o usuário já existe

  const haveCooperator = await getAll(id);

  const list = new getAllProducts();
  const haveProducts = await list.execute(id);
  const haveClients = await findByStoreId(id);
  if (haveCooperator.data.length > 0) {
    return {
      sucess: false,
      data: null,
      message:
        "Não é possível excluir a loja, pois há funcionários cadastrados",
    };
  }

  if (haveProducts && haveProducts.data.length > 0) {
    return {
      sucess: false,
      data: null,
      message: "Não é possível excluir a loja, pois há produtos cadastrados",
    };
  }

  if (haveClients && haveClients.sucess == false) {
    return {
      sucess: false,
      data: null,
      message: "Não é possível excluir a loja, pois há clientes cadastrados",
    };
  }

  await prisma.store.delete({ where: { id: id } });
  return {
    sucess: true,
    data: [],
    message: "Apagado com sucesso",
  };
}
