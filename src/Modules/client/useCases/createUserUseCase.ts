import { Client } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ClientDTO } from "../dtos/ClientDTO";
import { hash } from "../../../Utils/hashUtils";

export class CreateUserUseCase {
  async execute({
    name,
    email,
    phone,
    cpf,
    cep,
    storeId,
    password,
    points,
  }: ClientDTO): Promise<Client> {
    const userAlreadyExists = await prisma.client.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw "Usuário já existe!";
    }

    password = hash(password);
    const user = await prisma.client.create({
      data: {
        name,
        email,
        phone,
        cpf,
        cep,
        storeId: Number(storeId),
        password,
        points: Number(points),
      },
    });

    return user;
  }
}
