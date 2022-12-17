import { prisma } from "../../../Prisma/client";

export async function getMany(id: number) {
  const points = await prisma.points_solicitation.findMany({
    where: {
      clientId: id,
    },
  });
  if (points) {
    return {
      sucess: true,
      data: points,
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Não foi possível encontrar os pontos solicitados",
    };
  }
}
