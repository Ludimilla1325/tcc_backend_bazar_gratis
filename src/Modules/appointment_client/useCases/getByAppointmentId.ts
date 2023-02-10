import { prisma } from "../../../Prisma/client";

export async function getByAppointmentId(id: number) {
  // Verificar se o usuário já existe

  const data = await prisma.client_Appointment.findMany({
    where: {
      AND: [
        {
          appointmentId: id,
        },
        {
          delivered: false,
        },
      ],
    },
  });

  if (!data) {
    return {
      sucess: false,
      data: [],
      message: null,
    };
  }
  return {
    sucess: true,
    data: data,
    message: null,
  };
}
