import { Purchase } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { handlePoints } from "../../client/useCases/handlePoints";
import { handleQuantities } from "../../product/useCases/handleQuantities";
import { ICreatePurchase } from "../dtos/ICreatePurchase";
export async function create({
  appointmentId,
  productId,
  quantity,
}: ICreatePurchase): Promise<Purchase> {
  const product = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });

  if (product) {
    if (product.quantity < quantity) {
      throw "Quantidade indisponível!";
    }

    const query = await prisma.purchase.create({
      data: {
        client_AppointmentId: Number(appointmentId),
        productId: Number(productId),
        quantity: Number(quantity),
      },
    });

    const t = await handleQuantities(productId, -quantity);
    const ponits = await handlePoints(2, -(quantity * product?.value));

    return query;
  }
  throw "Não foi possível registrar esta compra";
}
