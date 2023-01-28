import { Purchase } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { updatePoints } from "../../client/useCases/handlePoints";
import { handleQuantities } from "../../product/useCases/handleQuantities";
import { ICreatePurchase } from "../dtos/CreatePurchaseDTO";
export async function create(
  { client_AppointmentId, productId, quantity }: ICreatePurchase,
  clientId: number
) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(productId),
    },
  });

  if (product) {
    if (product.quantity < quantity) {
      return {
        sucess: false,
        data: null,
        message: "Quantidade indisponível!",
      };
    }

    const query = await prisma.purchase.create({
      data: {
        client_AppointmentId: Number(client_AppointmentId),
        productId: Number(productId),
        quantity: Number(quantity),
      },
    });

    const t = await handleQuantities(productId, -quantity);
    const ponits = await updatePoints(clientId, -(quantity * product?.value));

    return {
      sucess: true,
      data: query,
      message: null,
    };
  }
  return {
    sucess: false,
    data: product,
    message: "Não foi possível registrar esta compra",
  };
}
