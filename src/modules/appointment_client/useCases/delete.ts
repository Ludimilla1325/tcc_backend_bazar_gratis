import { prisma } from "../../../Prisma/client";
import { getAll } from "../../purchase/useCases/getAll";
import { getById } from "./getById";
import { delet } from "../../purchase/useCases/delete";
import { ICreateAppointmentClient } from "../dtos/ICreateAgendamentoCliente";

export async function del(id: number) {
  const data = await getAll(id);
  for (let index = 0; index < data.data.length; index++) {
    const appointment_client = await getById(id);
    const element = data.data[index];
    if (appointment_client.data)
      await delet(element.id, appointment_client.data.clientId);
  }

  const query = await prisma.client_Appointment.delete({
    where: { id },
  });

  return {
    sucess: true,
    data: query,
    message: null,
  };
}
