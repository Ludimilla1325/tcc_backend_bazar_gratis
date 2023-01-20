import { Prisma } from "@prisma/client";
import { Puchase } from "../../../../Interfaces/Puchase";
import { prisma } from "../../../../Prisma/client";

export async function monthlyPurchase() {
  const purchaseDelivered: Array<Puchase> = await prisma.$queryRaw(
    Prisma.sql`select COUNT(ca.id) as qtdCestas, date_format(a.appointment_date,'%M') as mes 
    from tcc.Client_Appointment ca 
    inner join tcc.Appointment a on ca.appointmentId = a.id  
    inner join tcc.Client c on ca.clientId = c.id 
    WHERE     DATE(a.appointment_date) >= DATE(NOW()) - INTERVAL 360 DAY 
    and ca.delivered = 1 
    GROUP BY  mes`
  );

  const labels = purchaseDelivered.map((elem) => {
    return elem.mes;
  });

  const data = purchaseDelivered.map((elem) => {
    return elem.qtdCestas;
  });

  if (purchaseDelivered) {
    return {
      sucess: true,
      data: { labels, data },
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Problema",
    };
  }
}
