import { prisma } from "../../../Prisma/client";
import { checkMasterById } from "../../master/useCases";
import { CreateStoreDTO } from "../dtos/CreateStoreDTO";

export async function create(
  { name, localization, maxPoints }: CreateStoreDTO,
  masterId: number
) {
  // Verificar se o usuário já existe

  const master = await checkMasterById(masterId);

  if (master) {
    const store = await prisma.store.create({
      data: {
        name,
        localization,
        maxPoints,
        creation_date: new Date(),
      },
    });

    return {
      sucess: true,
      data: store,
      message: null
    }; 

   
  }

  return {
    sucess: false,
    data: null,
    message: "Não foi possível criar a loja " + name,
  }; 
}
