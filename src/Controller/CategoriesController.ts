import { Request, Response } from "express";
import { getAll } from "../modules/category/useCases/getAll";
export class CategoryController {
  static async getAll(req: Request, res: Response) {
    try {
      const result = await getAll();

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
