import { prisma } from "../../../Prisma/client";
import { CreateAppointmentDTO } from "../dtos/CreateAppointmentDTO";

export async function del( id :number ) {
  // Verificar se o usuário já existe

  // Criar o usuário
  const data = await prisma.appointment.delete({
    where: { id: id },
  });

  return { sucess: true, data, message: null };
}
