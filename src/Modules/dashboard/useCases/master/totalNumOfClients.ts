import { Prisma } from "@prisma/client";
import { QtClient } from "../../../../Interfaces/QtdClient";
import { prisma } from "../../../../Prisma/client";

export async function totalNumOfClients() {
  const numberOfClients: Array<QtClient> = await prisma.$queryRaw(
    Prisma.sql`select COUNT(id) as qtdClient from Client c`
  );

  if (numberOfClients) {
    return {
      sucess: true,
      data: numberOfClients[0],
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema ao contar o número de clientes",
    };
  }
}
