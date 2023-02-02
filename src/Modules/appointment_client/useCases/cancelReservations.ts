import { Client_Appointment, Prisma } from "@prisma/client";
import { prisma } from "../../../Prisma/client";

import {del as deleteReservatios} from "./delete";
interface DataResponse  {
    id:number;
    appointment_date:Date;
    delivered:boolean;
}

export async function cancelReservations() {

  const queryFilterInvalidReservations:DataResponse[] = await prisma.$queryRaw(Prisma.sql`
  select Client_Appointment.id, appointment_date,delivered from Appointment inner join Client_Appointment on Client_Appointment.appointmentId = Appointment.id 

  where delivered = false and appointment_date < now();
;`);

    for (let index = 0; index < queryFilterInvalidReservations.length; index++) {
        const element = queryFilterInvalidReservations[index];
        await deleteReservatios(element.id);
    }

  return {
    sucess: true,
    data: queryFilterInvalidReservations,
    message: null,
  };
}
