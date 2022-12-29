import { prisma } from "../../../Prisma/client";
import { CreateAppointmentDTO } from "../dtos/CreateAppointmentDTO";

export async function update({
  appointment_date,
  spots,
  storeId,
  id,
}: CreateAppointmentDTO) {
  // Verificar se o usuário já existe

  // Criar o usuário
  const data = await prisma.appointment.update({
    where: { id: id },
    data: {
      appointment_date,
      spots: Number(spots),
      storeId: Number(storeId),
    },
  });

  return { sucess: true, data, message: null };
}
