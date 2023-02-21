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

export async function pointsSolicitationLastNinetyDaysPerStore() {
  const pointsSolicitation: pointsSolicitation[] = await prisma.$queryRaw(
    Prisma.sql`SELECT s.name as storeName, COUNT(ps.id) as qtd, date_format(ps.request_date,'%M') as mes  
    FROM Points_solicitation ps 
    inner join Client c on ps.clientId = c.id 
    inner join Store s on c.storeId  = s.id 
    where DATE(request_date) >= DATE(NOW()) - INTERVAL 90 DAY
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
      // label.map((month) => {
      //   if (month != solicitation.mes) {
      //     variaveis.push(0);
      //   } else {
      //     variaveis.push(Number(solicitation.qtd));
      //   }
      // });

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

  // pointsSolicitation.map((solicitation) => {
  //   if (!dataAll.find((e) => e.label === solicitation.storeName)) {
  //     const variaveis: any[] = [];
  //     label.map((month) => {
  //       if (month != solicitation.mes) {
  //         variaveis.push(0);
  //       } else {
  //         variaveis.push(Number(solicitation.qtd));
  //       }
  //     });

  //     dataAll.push({
  //       label: solicitation.storeName,
  //       data: variaveis,
  //     });
  //   }
  // });

  // else {
  //   let index = dataAll.findIndex(
  //     (data) => data.label === solicitation.storeName
  //   );
  //   dataAll[index].data = [
  //     ...dataAll[index].data,
  //     Number(solicitation.qtd),
  //   ];
  // }
  // });

  console.log(dataAll);

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
      message: "Problema em selecionar as solicitações de pontos",
    };
  }
}
