import { Request, Response } from "express";
import { getAllProducts } from "../modules/product/useCases";

export class ProdutoController {
  async toList(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const list = new getAllProducts();

      const result = await list.execute(storeId);

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
