import { Client } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
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
  }: CreateUserDTO): Promise<Client> {
    // Verificar se o usuário já existe
    const userAlreadyExists = await prisma.client.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      console.log(userAlreadyExists);
      throw "User already exists!";
    }

    password = hash(password);
    // Criar o usuário
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
