import { prisma } from "../../../Prisma/client";
import { hash } from "../../../Utils/hashUtils";
import { checkMasterById } from "../../master/useCases";
import { UpdateCooperatorDTO } from "../dtos/UpdateCooperatorDTO";
import { getById } from "./getById";

export async function update({
  email,
  password,
  name,
  active,
  cpf,
  admin,
  storeId,
  id,
}: UpdateCooperatorDTO) {
  // Verificar se o usuário já existe

  // const master = await checkMasterById(+id);
  // const admin_ = await getById(+id);
  // if (!master && !admin_ && id != +id) {
  //   return {
  //     sucess: false,
  //     data: null,
  //     message: "Operação não permitida!",
  //   };
  // }

  const data = {
    name,
    active,
    admin,
    storeId: +storeId,
  };
  const cooperator = await prisma.cooperator.update({
    where: {
      id,
    },
    data: data,
  });

  return {
    sucess: true,
    data: cooperator,
    message: null,
  };
}
