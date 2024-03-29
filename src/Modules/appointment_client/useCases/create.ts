import { Client_Appointment } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ICreateAppointmentClient } from "../dtos/CreateAgendamentoClienteDTO";

export async function create({
  appointmentId,
  clientId,
  delivered,
  storeId,
}: ICreateAppointmentClient) {
  const query = await prisma.client_Appointment.create({
    data: {
      appointmentId: Number(appointmentId),
      clientId: Number(clientId),
      delivered: false,
      storeId: Number(storeId),
    },
  });

  return {
    sucess: true,
    data: query,
    message: null,
  };
}
