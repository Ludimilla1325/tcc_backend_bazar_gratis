import { Prisma } from "@prisma/client";
import { QtClient } from "../../../../Interfaces/QtdClient";
import { prisma } from "../../../../Prisma/client";

export async function totalNumOfClientsByStore(storeId: number) {
  const numberOfClients: Array<QtClient> = await prisma.$queryRaw(
    Prisma.sql`select COUNT(id) as qtdClient from Client c where c.storeId = ${storeId}`
  );

  if (numberOfClients) {
    return {
      sucess: true,
      data: numberOfClients[0].qtdClient,
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
