import { Prisma } from "@prisma/client";
import { prisma } from "../../../../Prisma/client";

interface pointsSolicitation {
  storeName: string;
  qtd: number;
  mes: string;
}

interface data {
  label: string;
  data: any[];
  borderColor: string;
  backgroundColor: string;
}

export async function PurchaseLastNinetyDaysPerStore() {
  const pointsSolicitation: pointsSolicitation[] = await prisma.$queryRaw(
    Prisma.sql`select s.name as storeName,COUNT(ca.id) as qtd, date_format(a.appointment_date,'%M') as mes 
    from Client_Appointment ca 
    inner join Appointment a on ca.appointmentId = a.id  
    inner join Client c on ca.clientId = c.id 
       inner join Store s on c.storeId  = s.id 
    WHERE     DATE(a.appointment_date) >= DATE(NOW()) - INTERVAL 360 DAY 
    and ca.delivered = 1 
    and c.storeId = 1
     GROUP BY  mes, storeName`
  );

  let label = pointsSolicitation.map((solicitation) => {
    return solicitation.mes;
  });

  label = [...new Set(label)];

  const dataAll: data[] = [];
  30;

  const makeRandomColor = () => {
    const randomBetween = (min: any, max: any) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(170,51,${b})`;
  };

  pointsSolicitation.map((solicitation) => {
    if (!dataAll.find((e) => e.label === solicitation.storeName)) {
      const variaveis: any[] = [];
      const color = makeRandomColor();

      dataAll.push({
        label: solicitation.storeName,
        data: [Number(solicitation.qtd)],
        borderColor: color,
        backgroundColor: color,
      });
    } else {
      let index = dataAll.findIndex(
        (data) => data.label === solicitation.storeName
      );
      dataAll[index].data = [...dataAll[index].data, Number(solicitation.qtd)];
    }
  });

  if (pointsSolicitation) {
    return {
      sucess: true,
      data: { labels: label, datasets: dataAll },
      message: null,
    };
  } else {
    return {
      sucess: false,
      data: null,
      message: "Erro",
    };
  }
}
