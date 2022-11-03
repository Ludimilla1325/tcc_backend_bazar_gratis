import { prisma } from "../../../Prisma/client";

export async function createPointsSolicitation(
  clientId: number,
  quantity: number,
  request_date: Date,
  status: string,
  client_justification: string
) {
  const query = await prisma.points_solicitation.create({
    data: {
      clientId,
      quantity,
      request_date,
      status,
      client_justification,
    },
  });

  console.log(query);

  if (query) {
    return {
      sucess: true,
      data: null,
      message: "Solicitação de pontos registrados com sucesso",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema ao registrar solicitação de pontos",
    };
  }
}
