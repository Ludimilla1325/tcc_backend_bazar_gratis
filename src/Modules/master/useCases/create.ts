import { prisma } from "../../../Prisma/client";
import { CreateMasterDTO } from "../dtos/CreateMasterDTO";
import { hash } from "../../../Utils/hashUtils";

export async function create({ email, password, name }: CreateMasterDTO) {
  const userAlreadyExists = await prisma.client.findFirst({
    where: {
      email,
    },
  });

  if (userAlreadyExists) {
    return {
      sucess: false,
      data: null,
      message: "Já existe um usuário cadastrado com este email!",
    };
  }
  password = hash(password);
  const master = await prisma.master.create({
    data: {
      name,
      email,
      password,
    },
  });

  return {
    sucess: true,
    data: master,
    message: null,
  };
}
