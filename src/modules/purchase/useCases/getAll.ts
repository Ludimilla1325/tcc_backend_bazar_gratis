import { Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ICart } from "../dtos/ICart";
export async function getAll(appointmentId: number) {
  const list: ICart[] = await prisma.$queryRaw(
    Prisma.sql`   select Purchase.id, Purchase.productId,Purchase.quantity,
    Product.name,Product.description, Product.value from Purchase inner join Product on Product.id = productId where client_AppointmentId = ${Number(
      appointmentId
    )}; `
  );

  return {
    sucess: true,
    data: list,
    message: null,
  };
}
