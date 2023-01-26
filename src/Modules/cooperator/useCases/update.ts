import { prisma } from "../../../Prisma/client";
import { hash } from "../../../Utils/hashUtils";
import { checkMasterById } from "../../master/useCases";
import { UpdateCooperatorDTO } from "../dtos/UpdateCooperatorDTO";
import { getById } from "./getById";

export async function update({ name, active, admin, id }: UpdateCooperatorDTO) {
  const data = {
    name,
    active,
    admin,
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
