import { Prisma, Appointment } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

export async function getAll(storeId: number): Promise<Appointment[]> {
  const list: Appointment[] = await prisma.appointment.findMany({
    where: { storeId: storeId },
  });
  return list;
}
