import { Cliente } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import {encryptar} from "../../../Utils/encryptar";

export class CreateUserUseCase {
  async execute({
    nome,
    email,
    telefone,
    cpf,
    cep,
    lojaId,
    senha,
    pontos,
  }: CreateUserDTO): Promise<Cliente> {
    // Verificar se o usuário já existe
    const userAlreadyExists = await prisma.cliente.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
        console.log(userAlreadyExists)
      throw "User already exists!";
    }

    senha = encryptar(senha);
    // Criar o usuário
    const user = await prisma.cliente.create({
      data:{
        nome,
        email,
        telefone,
        cpf,
        cep,
        lojaId:Number(lojaId),
        senha,
        pontos:Number(pontos),
      }
    });

    return user;
  }
}
