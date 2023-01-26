import { Client_Appointment } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ICreateAppointmentClient } from "../dtos/ICreateAgendamentoCliente";

export async function create({
  appointmentId,
  clientId,
  delivered,
}: ICreateAppointmentClient) {
  console.log(appointmentId, clientId, delivered);
  const query = await prisma.client_Appointment.create({
    data: {
      appointmentId: Number(appointmentId),
      clientId: Number(clientId),
      delivered: false,
    },
  });

  //Cadastrar pedidos

  return {
    sucess: true,
    data: query,
    message: null,
  };
}