import { prisma } from "../../../Prisma/client";
import { hash } from "../../../Utils/hashUtils";
import { checkMasterById } from "../../master/useCases";
import { UpdateCooperatorDTO } from "../dtos/UpdateCooperatorDTO";
import { getById } from "./getById";

export async function update(
  {
    email,
    password,
    name,
    active,
    cpf,
    admin,
    storeId,
    id,
  }: UpdateCooperatorDTO,
  operatorId: number
) {
  // Verificar se o usuário já existe


  const master = await checkMasterById(operatorId);
  const admin_ = await getById(operatorId);
  if (!master && !admin_ && id != operatorId) {
    throw "Operação não permitida!";
  }

  const data = password
    ? {
        email,
        password: hash(password),
        name,
        active,
        cpf,
        admin,
        storeId,
      }
    : {
        email,
        name,
        active,
        cpf,
        admin,
        storeId,
      };
  const cooperator = await prisma.cooperator.update({
    where: {
      id,
    },
    data: data,
  });

  return cooperator;
}
