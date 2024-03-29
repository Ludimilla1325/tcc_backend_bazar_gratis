import { prisma } from "../../../Prisma/client";
import { CreateAppointmentDTO } from "../dtos/CreateAppointmentDTO";

export async function create({
  appointment_date,
  spots,
  storeId,
}: CreateAppointmentDTO) {
  const data = await prisma.appointment.create({
    data: {
      appointment_date,
      spots: Number(spots),
      storeId: Number(storeId),
    },
  });

  return { sucess: true, data, message: null };
}
