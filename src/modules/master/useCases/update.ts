import { prisma } from "../../../Prisma/client";
import { UpdateMasterDTO } from "../dtos/UpdateMasterDTO";
import { hash, compare } from "../../../Utils/hashUtils";
import { secret } from "../../../Utils/tokenSecret";
import jwt from "jsonwebtoken";

export async function update({ email, password, name, id }: UpdateMasterDTO) {
  //Só um crud para alterar senha e dados pessoais
  const data = password
    ? {
        email,
        password:hash(password),
        name,
      }
    : {
        email,
        name,
      };

  // Update
  const updateUser = await prisma.master.update({
    where: {
      id,
    },
    data: data,
  });

  return {
    id,
    email,
    name,
  };
}
