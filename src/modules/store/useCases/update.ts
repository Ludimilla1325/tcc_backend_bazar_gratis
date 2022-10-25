import { prisma } from "../../../Prisma/client";
import { checkMasterById } from "../../master/useCases";
import { UpdateStoreDTO } from "../dtos/UpdateStoreDTO";

export async function update(
  { name, localization, maxPoints, id }: UpdateStoreDTO,
  masterId: number
) {
  // Verificar se o usuário já existe

  const master = await checkMasterById(masterId);

  if (master) {
    const store = await prisma.store.update({
      where: {
        id,
      },
      data: {
        name,
        localization,
        maxPoints,
        creation_date: new Date(),
      },
    });

    return store;
  }
  throw "Não foi possível atualizar a loja " + name;
}
