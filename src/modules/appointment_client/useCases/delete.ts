import { prisma } from "../../../Prisma/client";
import { getAll } from "../../purchase/useCases/getAll";
import { ICreateAppointmentClient } from "../dtos/ICreateAgendamentoCliente";

export async function del(id: number) {
  const query = await prisma.client_Appointment.delete({
    where: { id },
  });

  //Excluir carrinho

  return {
    sucess: true,
    data: query,
    message: null,
  };
}
