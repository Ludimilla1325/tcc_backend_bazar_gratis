import { prisma } from "../../../Prisma/client";
import { getByAppointmentId } from "../../appointment_client/useCases/getByAppointmentId";
import { CreateAppointmentDTO } from "../dtos/CreateAppointmentDTO";

export async function del(id: number) {
  const haveAppointments = await getByAppointmentId(id);

  if (haveAppointments && haveAppointments.data.length > 0) {
    return {
      sucess: false,
      data: null,
      message: "Não é possível excluir o horário, pois há agendamentos",
    };
  }

  const data = await prisma.appointment.delete({
    where: { id: id },
  });

  return { sucess: true, data, message: null };
}
