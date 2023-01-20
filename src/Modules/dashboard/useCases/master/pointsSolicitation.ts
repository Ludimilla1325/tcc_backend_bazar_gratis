import { Prisma } from "@prisma/client";
import { prisma } from "../../../../Prisma/client";

export async function pointsSolicitationPercentage() {
  interface qtd {
    qtd: number;
  }

  try {
    const approved: Array<qtd> = await prisma.$queryRaw(
      Prisma.sql`SELECT sum(quantity) as qtd FROM Points_solicitation ps inner join Client c on ps.clientId = c.id where DATE(request_date) >= DATE(NOW()) - INTERVAL 30 DAY and status = 'APROVADO'`
    );

    const geral: Array<qtd> = await prisma.$queryRaw(
      Prisma.sql`SELECT sum(quantity) as qtd FROM Points_solicitation ps inner join Client c on ps.clientId = c.id where DATE(request_date) >= DATE(NOW()) - INTERVAL 30 DAY`
    );

    const emAndamento: Array<qtd> = await prisma.$queryRaw(
      Prisma.sql`SELECT sum(quantity) as qtd FROM Points_solicitation ps inner join Client c on ps.clientId = c.id where DATE(request_date) >= DATE(NOW()) - INTERVAL 30 DAY  and status = 'EM ANDAMENTO'`
    );

    const denied: Array<qtd> = await prisma.$queryRaw(
      Prisma.sql`SELECT sum(quantity) as qtd FROM Points_solicitation ps inner join Client c on ps.clientId = c.id where DATE(request_date) >= DATE(NOW()) - INTERVAL 30 DAY and status = 'NEGADO'`
    );

    const percentagedOfApproved = (+approved[0].qtd * 100) / +geral[0].qtd;

    const percentagedOfDenied = (+denied[0].qtd * 100) / +geral[0].qtd;

    const open = (+emAndamento[0].qtd * 100) / +geral[0].qtd;

    const data = [
      {
        title: "Solicitação de pontos",
        subtitle: "30 dias",
        value: `${geral[0].qtd}`,
        percent: 100,
      },
      {
        title: "Solicitação de pontos em andamento",
        subtitle: "30 dias",
        value: `${emAndamento[0].qtd}`,
        percent: +open.toFixed(2),
      },
      {
        title: "Solicitação de pontos aprovados",
        subtitle: "30 dias",
        value: `${approved[0].qtd}`,
        percent: +percentagedOfApproved.toFixed(2),
      },
      {
        title: "Solicitação de pontos negados",
        subtitle: "30 dias",
        value: `${denied[0].qtd}`,
        percent: +percentagedOfDenied.toFixed(2),
      },
    ];

    return {
      sucess: true,
      data: data,
      message: null,
    };
  } catch (error) {
    throw new Error(`Erro, ${error}`);
  }
}
