import { Prisma } from "@prisma/client";
import { Puchase } from "../../../../Interfaces/Puchase";
import { prisma } from "../../../../Prisma/client";

export async function purchaseDelivered() {
  try {
    const purchaseDeliveredNinety: Array<Puchase> = await prisma.$queryRaw(
      Prisma.sql`select COUNT(ca.id) as qtdCestas from Client_Appointment ca 
    inner join Appointment a on ca.appointmentId = a.id  
    inner join Client c on ca.clientId = c.id 
    where DATE(a.appointment_date) >= DATE(NOW()) - INTERVAL 90 DAY 
    and ca.delivered = 1 `
    );

    const purchaseDeliveredSeven: Array<Puchase> = await prisma.$queryRaw(
      Prisma.sql`select COUNT(ca.id) as qtdCestas from Client_Appointment ca 
    inner join Appointment a on ca.appointmentId = a.id  
    inner join Client c on ca.clientId = c.id 
    where DATE(a.appointment_date) >= DATE(NOW()) - INTERVAL 7 DAY 
    and ca.delivered = 1 `
    );

    const purchaseDeliveredThirty: Array<Puchase> = await prisma.$queryRaw(
      Prisma.sql`select COUNT(ca.id) as qtdCestas from Client_Appointment ca 
    inner join Appointment a on ca.appointmentId = a.id  
    inner join Client c on ca.clientId = c.id 
    where DATE(a.appointment_date) >= DATE(NOW()) - INTERVAL 30 DAY 
    and ca.delivered = 1 `
    );

    const overall = [
      {
        value: `${purchaseDeliveredNinety[0].qtdCestas}`,
        title: "90 dias",
      },
      {
        value: `${purchaseDeliveredThirty[0].qtdCestas}`,
        title: "30 dias",
      },
      {
        value: `${purchaseDeliveredSeven[0].qtdCestas}`,
        title: "7 dias",
      },
    ];

    return {
      sucess: true,
      data: overall,
      message: null,
    };
  } catch (error) {
    throw new Error(`Erro: ${error}`);
  }
}
