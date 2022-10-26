import { prisma } from "../../../Prisma/client";
export async function findByEmail(email: string) {
  const user = await prisma.client.findFirst({
    where: {
      email: email,
    },
  });

  if (user) {
    // @ts-expect-error
    delete user.password;
    return { sucess: true, data: user, message: null };
  } else {
    return { sucess: false, data: null, message: "User not found" };
  }
}
