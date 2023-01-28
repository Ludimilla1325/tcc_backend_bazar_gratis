import { prisma } from "../../../Prisma/client";
import { Prisma } from "@prisma/client";

interface Params {
  loja_id: number;
  clientId: number;
}
export async function getAll({ loja_id, clientId }: Params) {
  const points = await prisma.$queryRaw(
    clientId
      ? Prisma.sql`
  select  a.id, clientId, quantity, request_date, status, employeeId, client_justification, employee_justification, b.name
  from Points_solicitation as a inner join Client as b on b.id = a.clientId  
  where b.id = ${clientId}
 
 ;`
      : Prisma.sql`
 select  a.id, clientId, quantity, request_date, status, employeeId, client_justification, employee_justification, b.name
 from Points_solicitation as a inner join Client as b on b.id = a.clientId  
 where b.storeId = ${loja_id}

;`
  );
  if (points) {
    return {
      sucess: true,
      data: points,
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Não foi possível encontrar os pontos solicitados",
    };
  }
}
