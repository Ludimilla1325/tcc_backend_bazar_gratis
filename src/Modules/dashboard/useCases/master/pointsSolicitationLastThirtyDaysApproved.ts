import { Prisma } from "@prisma/client";
import { prisma } from "../../../../Prisma/client";

export async function pointsSolicitationLastThirtyDaysApproved() {
  const pointsSolicitation = await prisma.$queryRaw(
    Prisma.sql`SELECT * FROM Points_solicitation ps  WHERE DATE(request_date) >= DATE(NOW()) - INTERVAL 30 DAY and status = 'APROVADO'`
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
