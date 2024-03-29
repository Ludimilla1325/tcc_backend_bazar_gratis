import { Request, Response } from "express";
import { getAll } from "../Modules/category/useCases/getAll";

export class CategoryController {
  static async getAll(req: Request, res: Response) {
    try {
      const result = await getAll();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
