import express from "express";
const app = express();
const port = 3001;
import cors from "cors";
import client_routes from "./Routes/Client.routes";
import product_routes from "./Routes/Product.routes";
import appointment_routes from "./Routes/Appointment.routes";
import appointmentClient_routes from "./Routes/AppointmentClient.routes";
import purchase_routes from "./Routes/Purchase.Routes";

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/cliente", client_routes);
app.use("/produto", product_routes);
app.use("/agendamento", appointment_routes);
app.use("/agendamento-cliente", appointmentClient_routes);
app.use("/compra", purchase_routes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
