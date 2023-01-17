import { Prisma } from "@prisma/client";
import { prisma } from "../../../../Prisma/client";

export async function pointsSolicitationLastThirtyDaysApprovedByStore(
  storeId: number
) {
  const pointsSolicitation = await prisma.$queryRaw(
    Prisma.sql`SELECT * FROM Points_solicitation ps inner join Client c on ps.clientId = c.id where DATE(request_date) >= DATE(NOW()) - INTERVAL 30 DAY and c.storeId = ${storeId} and status = 'APROVADO'`
  );
  if (pointsSolicitation) {
    return {
      sucess: true,
      data: pointsSolicitation,
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema em selecionar as solicitações de pontos",
    };
  }
}
