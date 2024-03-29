import { prisma } from "../../../Prisma/client";
import { getAll } from "../../purchase/useCases/getAll";

export async function confirmDelivery(id: number) {
  const appointment_client = await prisma.client_Appointment.findFirst({
    where: { id },
  });

  if (appointment_client) {
    const query = await prisma.client_Appointment.update({
      data: { delivered: true },
      where: { id },
    });

    const list = await getAll(appointment_client.appointmentId);

    return {
      sucess: true,
      data: query,
      message: null,
    };
  }
  return {
    sucess: false,
    data: null,
    message: "Nenhum Agendamento com este ID",
  };
}
