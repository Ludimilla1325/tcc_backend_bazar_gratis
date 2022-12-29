import { Client } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
import { ClientDTO } from "../dtos/ClientDTO";

export async function updateClient(
  name: string,
  email: string,
  phone: string,
  cep: string,
  storeId: number
): Promise<Client> {
  const user = await prisma.client.update({
    where: { email: email },
    data: {
      name,
      phone,
      cep,
      storeId: Number(storeId),
    },
  });

  return user;
}
