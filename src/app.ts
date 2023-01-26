import express from "express";
import { Router } from "express";
const app = express();
const port = 3987;
import cors from "cors";
import client_routes from "./Routes/Client.routes";
import product_routes from "./Routes/Product.routes";
import appointment_routes from "./Routes/Appointment.routes";
import appointmentClient_routes from "./Routes/AppointmentClient.routes";
import purchase_routes from "./Routes/Purchase.Routes";
import master_routes from "./Routes/Master.routes";
import store_routes from "./Routes/Store.routes";
import cooperator_routes from "./Routes/Cooperator.routes";
import points_solicitation from "./Routes/Points_solicitation.routes";
import { images_path } from "./Utils/paths";
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

app.use("/client", client_routes);
app.use("/product", product_routes);
app.use("/appointment", appointment_routes);
app.use("/appointment-client", appointmentClient_routes);
app.use("/purchase", purchase_routes);
app.use("/master", master_routes);
app.use("/store", store_routes);
app.use("/cooperator", cooperator_routes);
app.use("/pointsSolicitation", points_solicitation);
app.use(
  Router().get("/photo/:file", function (req, res) {
    res.sendFile(images_path + "/" + req.params.file);
  })
);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
