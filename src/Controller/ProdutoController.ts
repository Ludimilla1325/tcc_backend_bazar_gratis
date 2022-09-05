import { Request, Response } from "express";
import { getAllProdutos } from "../modules/produto/useCases/";

export class ProdutoController {
  async listar(req: Request, res: Response) {
    const loja_id = Number(req.params.loja_id);
    try {
      const lista = new getAllProdutos();

      const result = await lista.execute(loja_id);

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
