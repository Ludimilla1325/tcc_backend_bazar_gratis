import { create } from "domain";
import { Request, Response } from "express";
import { getAllProducts } from "../modules/product/useCases";
import { getOne } from "../modules/product/useCases/getOne";
import { createProduct } from "../modules/product/useCases/create";
import { updateProduct } from "../modules/product/useCases/update";
import { deleteProduct } from "../modules/product/useCases/delete";
export class ProdutoController {
  async getAllProducts(req: Request, res: Response) {
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

  async getProductById(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    const productId = Number(req.params.productId);

    try {
      const product = new getOne();
      const result = await product.execute(storeId, productId);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
  async createProduct(req: Request, res: Response) {
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
      console.log(error);
      return res.status(400).json(error);
    }
  }
  async updateProduct(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    const productId = Number(req.params.productId);
    const { name, description, photo, categoryId, value, quantity } = req.body;

    try {
      const product = await updateProduct(
        productId,
        name,
        description,
        photo,
        categoryId,
        value,
        quantity,
        storeId
      );
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async deleteProductById(req: Request, res: Response) {
    const storeId = Number(req.params.storeId);
    const productId = Number(req.params.productId);

    try {
      const product = await deleteProduct(storeId, productId);
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
