import { prisma } from "../../../Prisma/client";

export async function deletePointsSolicitation(id: number) {
  const deleted = await prisma.points_solicitation.delete({
    where: { id: id },
  });
  if (deleted) {
    return {
      sucess: true,
      data: null,
      message: "Solicitação de pontos deletado",
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema ao apagar solicitação de pontos",
    };
  }
}
