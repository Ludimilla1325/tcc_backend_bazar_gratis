import { prisma } from "../../../Prisma/client";
import { checkMasterById } from "../../master/useCases";
import { UpdateStoreDTO } from "../dtos/UpdateStoreDTO";

export async function update(
  { name, localization, maxPoints, id }: UpdateStoreDTO,
  masterId: number
) {
  const store = await prisma.store.update({
    where: {
      id: +id,
    },
    data: {
      name,
      localization,
      maxPoints: +maxPoints,
      creation_date: new Date(),
    },
  });

  return {
    sucess: true,
    data: store,
    message: null,
  };
}
