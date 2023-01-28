import { prisma } from "../../../Prisma/client";


export async function getById(id:number) {
  // Verificar se o usuário já existe

  const data = await prisma.client_Appointment.findFirst({where:{ id}});
  return {
    sucess: true,
    data: data,
    message: null,
  }; 
}
