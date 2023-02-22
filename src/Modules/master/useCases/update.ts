import { prisma } from "../../../Prisma/client";
import { UpdateMasterDTO } from "../dtos/UpdateMasterDTO";
import { hash, compare } from "../../../Utils/hashUtils";
import { secret } from "../../../Utils/tokenSecret";
import jwt from "jsonwebtoken";

export async function update({ email, password, name, id }: UpdateMasterDTO) {
  const data = password
    ? {
        email,
        password: hash(password),
        name,
      }
    : {
        email,
        name,
      };
  const updateUser = await prisma.master.update({
    where: {
      id,
    },
    data: data,
  });

  return {
    sucess: true,
    data: {
      id,
      email,
      name,
    },
    message: null,
  };
}
