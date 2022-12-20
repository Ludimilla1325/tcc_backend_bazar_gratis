import { prisma } from "../../../Prisma/client";
import { ICreatePointsSolicitaction } from "../dtos/createPointsSolicitations";
import { IPointsSolicitation } from "../dtos/pointsSolicitation";

export async function createPointsSolicitation(
  
  data:ICreatePointsSolicitaction
) {
  const query = null;
  //  await prisma.points_solicitation.create({
  //   data:data,
  // });

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
