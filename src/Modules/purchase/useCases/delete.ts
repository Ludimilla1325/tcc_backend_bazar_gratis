import { Purchase } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { updatePoints } from "../../client/useCases/handlePoints";
import { handleQuantities } from "../../product/useCases/handleQuantities";
import { ICreatePurchase } from "../dtos/CreatePurchaseDTO";
export async function delet(purchaseId: number, clientId: number) {
  const query = await prisma.purchase.delete({
    where: { id: purchaseId },
  });
  const product = await prisma.product.findFirst({
    where: {
      id: query.productId,
    },
  });
  if (product) {
    const t = await handleQuantities(query.productId, +query.quantity);
    const ponits = await updatePoints(
      clientId,
      +(query.quantity * product.value)
    );

    return {
      sucess: true,
      data: query,
      message: null,
    };
  }

  return {
    sucess: false,
    data: null,
    message: "Não foi encontrado este produto",
  };
}
