import { Client_Appointment } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
export async function getAll(clientId: number) {
  const query = await prisma.client_Appointment.findMany({
    where: { clientId },
  });

  return {
    sucess: true,
    data: query,
    message: null,
  };
}
