import { prisma } from "../../../Prisma/client";
export async function   findById(id:number) {
  

  const user = await prisma.client.findFirst({
    where: {
      id: id,
    },
    include: { Store: true },
  });

  if (user) {
    // @ts-expect-error
    delete user.password;
    console.log(user)
    return { sucess: true, data: user, message: null };
  } else {
    return { sucess: false, data: null, message: "Usuário não encontrado" };
  }
}

