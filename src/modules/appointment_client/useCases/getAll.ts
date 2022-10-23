import { Client_Appointment } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
export async function getAll(clientId: number): Promise<Client_Appointment[]> {
  const lista = await prisma.client_Appointment.findMany({
    where: { clientId },
  });
  return lista;
}
