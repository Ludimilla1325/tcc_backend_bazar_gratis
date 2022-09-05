import express from "express";
const app = express();
const port = 3000;
import cliente_routes from "./Routes/Cliente.routes";
import produto_routes from "./Routes/Produto.routes";
import agendamento_routes from "./Routes/Agendamento.routes";
import agendamentoCliente_routes from "./Routes/AgendamentoCliente.routes";
import compra_routes from "./Routes/Compra.Routes";

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/cliente", cliente_routes);
app.use("/produto", produto_routes);
app.use("/agendamento", agendamento_routes);
app.use("/agendamento-cliente", agendamentoCliente_routes);
app.use("/compra", compra_routes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
