import { Client_Appointment, Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
export async function getAll(clientId: number) {
  const queryConstruct = ``;

  const query = await prisma.$queryRaw(Prisma.sql`
  SELECT Appointment.appointment_date, 
Client_Appointment.id,
(select sum(Purchase.quantity * value) from Purchase  inner join Product on Product.id = Purchase.productId where client_AppointmentId = Client_Appointment.id ) as value,
 Client_Appointment.delivered 
from Client_Appointment inner join Appointment on Appointment.id = Client_Appointment.appointmentId

where Client_Appointment.clientId = ${clientId}
;
  
  `);

  return {
    sucess: true,
    data: query,
    message: null,
  };
}
