import { create } from "domain";
import { Request, Response } from "express";
import { getAllProducts } from "../Modules/product/useCases";
import { getOne } from "../Modules/product/useCases/getOne";
import { createProduct } from "../Modules/product/useCases/create";
import { updateProduct } from "../Modules/product/useCases/update";
import { deleteProduct } from "../Modules/product/useCases/delete";

export class ProdutoController {
  static async getAllProducts(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    try {
      const list = new getAllProducts();

      const result = await list.execute(storeId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async getProductById(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    const productId = Number(req.params.productId);

    try {
      const product = new getOne();
      const result = await product.execute(storeId, productId);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  static async createProduct(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    const { name, description, photo, categoryId, value, quantity } = req.body;
    try {
      const product = await createProduct(
        name,
        description,
        photo,
        +categoryId,
        +value,
        +quantity,
        +storeId
      );
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  static async updateProduct(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    const productId = Number(req.params.productId);
    const { name, description, photo, categoryId, value, quantity } = req.body;

    try {
      const product = await updateProduct(
        +productId,
        name,
        description,
        photo,
        +categoryId,
        +value,
        +quantity,
        +storeId
      );
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async deleteProductById(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    const productId = Number(req.params.productId);

    try {
      const product = await deleteProduct(storeId, productId);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
