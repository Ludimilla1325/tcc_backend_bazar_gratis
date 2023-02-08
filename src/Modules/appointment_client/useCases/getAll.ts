import { Client_Appointment, Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";
export async function getAllByClient(clientId: number) {
  const queryConstruct = ``;

  const query = await prisma.$queryRaw(Prisma.sql`
  SELECT Appointment.appointment_date, 
Client_Appointment.id,
(select sum(Purchase.quantity) from Purchase  where client_AppointmentId = Client_Appointment.id) as itens,
(select sum(Purchase.quantity * value) from Purchase  inner join Product on Product.id = Purchase.productId where client_AppointmentId = Client_Appointment.id ) as value,
 Client_Appointment.delivered ,
 Client.name 
from Client_Appointment inner join Appointment on Appointment.id = Client_Appointment.appointmentId
inner join Client on Client.id =  Client_Appointment.clientId 

where Client_Appointment.clientId = ${clientId}

;
  
  `);

  return {
    sucess: true,
    data: query,
    message: null,
  };
}


export async function getAllByStore(store_id: number) {
  const queryConstruct = ``;

  const query = await prisma.$queryRaw(Prisma.sql`
  SELECT Appointment.appointment_date, 
Client_Appointment.id,
(select sum(Purchase.quantity) from Purchase  where client_AppointmentId = Client_Appointment.id) as itens,
(select sum(Purchase.quantity * value) from Purchase  inner join Product on Product.id = Purchase.productId where client_AppointmentId = Client_Appointment.id ) as value,
 Client_Appointment.delivered ,
 Client.name 
from Client_Appointment inner join Appointment on Appointment.id = Client_Appointment.appointmentId
inner join Client on Client.id =  Client_Appointment.clientId 

where Client.storeId = ${store_id}

;
  
  `);
  console.log(`
  SELECT Appointment.appointment_date, 
Client_Appointment.id,
(select sum(Purchase.quantity) from Purchase  where client_AppointmentId = Client_Appointment.id) as itens,
(select sum(Purchase.quantity * value) from Purchase  inner join Product on Product.id = Purchase.productId where client_AppointmentId = Client_Appointment.id ) as value,
 Client_Appointment.delivered ,
 Client.name 
from Client_Appointment inner join Appointment on Appointment.id = Client_Appointment.appointmentId
inner join Client on Client.id =  Client_Appointment.clientId 

where Client.storeId = ${store_id}

;
  
  `)
  return {
    sucess: true,
    data: query,
    message: null,
  };
}
