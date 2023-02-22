import { prisma } from "../../../Prisma/client";
import { CreateCooperatorDTO } from "../dtos/CreateCooperatorDTO";
import { hash } from "../../../Utils/hashUtils";
import { checkMasterById } from "../../master/useCases";
import { getById } from "./getById";

export async function create(
  { email, password, name, active, cpf, admin, storeId }: CreateCooperatorDTO,
  operatorId: number
) {
  if (!password) {
    throw "O campo senha deve ser preenchido para o colaborador poder efeturar o primeiro acesso!";
  }

  const master = await checkMasterById(operatorId);
  const admin_ = await getById(operatorId);
  if (!master && !admin_) {
    throw "Operação não permitida!";
  }

  const userAlreadyExists = await prisma.cooperator.findFirst({
    where: {
      email,
    },
  });

  if (userAlreadyExists) {
    return {
      sucess: false,
      data: null,
      message: "Já existe um colaborador cadastrado com este email!",
    };
  }
  password = hash(password);
  storeId = +storeId;
  const cooperator = await prisma.cooperator.create({
    data: {
      email,
      password,
      name,
      active: true,
      cpf,
      admin,
      storeId,
    },
  });

  return {
    sucess: true,
    data: cooperator,
    message: null,
  };
}
