import { Prisma, Appointment } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function getAll(storeId: number) {
  const list: Appointment[] = await prisma.appointment.findMany({
    where: {
      AND: [
        {
          storeId: storeId,
        },
        {
          appointment_date: {
            gte: new Date(),
          },
        },
      ],
    },
  });

  return { sucess: true, data: list, message: null };
}
