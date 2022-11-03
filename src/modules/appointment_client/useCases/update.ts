import { prisma } from "../../../Prisma/client";
import { getAll } from "../../purchase/useCases/getAll";
import { ICreateAppointmentClient } from "../dtos/ICreateAgendamentoCliente";

export async function update({
  appointmentId,
  id,
  clientId,
  delivered,
}: ICreateAppointmentClient) {
  const update = await prisma.client_Appointment.update({
    where: { id },
    data: { appointmentId, clientId, delivered },
  });

  return {
    sucess: true,
    data: update,
    message: null,
  };
}
