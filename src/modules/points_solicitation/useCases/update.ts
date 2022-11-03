import { prisma } from "../../../Prisma/client";

export async function updatePointsSolicitationAcceptOrNot(
  id: number,
  status: string,
  employeeId: number,
  employee_justification: string
) {
  const query = await prisma.points_solicitation.update({
    where: { id },
    data: {
      status,
      employeeId,
      employee_justification,
    },
  });

  if (query) {
    return {
      sucess: true,
      data: null,
      message: "Solicitação de pontos atualizados com sucesso",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema ao atualizar solicitação de pontos",
    };
  }
}

export async function updatePointsSolicitation(
  id: number,
  clientId: number,
  quantity: number,
  request_date: Date,
  status: string,
  employeeId: number,
  client_justification: string,
  employee_justification: string
) {
  const query = await prisma.points_solicitation.update({
    where: { id },
    data: {
      clientId,
      quantity,
      request_date,
      status,
      employeeId,
      client_justification,
      employee_justification,
    },
  });

  if (query) {
    return {
      sucess: true,
      data: null,
      message: "Solicitação de pontos atualizados com sucesso",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema ao atualizar solicitação de pontos",
    };
  }
}
