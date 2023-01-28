import { Prisma } from "@prisma/client";
import { Puchase } from "../../../../Interfaces/Puchase";
import { prisma } from "../../../../Prisma/client";

export async function purchaseDeliveredNinetyDays() {
  const purchaseDelivered: Array<Puchase> = await prisma.$queryRaw(
    Prisma.sql`select COUNT(ca.id) as qtdCestas from Client_Appointment ca 
    inner join Appointment a on ca.appointmentId = a.id  
    where DATE(a.appointment_date) >= DATE(NOW()) - INTERVAL 90 DAY and ca.delivered = 1 `
  );

  if (purchaseDelivered) {
    return {
      sucess: true,
      data: purchaseDelivered[0],
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema em selecionar as solicitações de pontos",
    };
  }
}
