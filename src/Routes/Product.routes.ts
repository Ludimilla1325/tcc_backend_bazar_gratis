import { Request, Router } from "express";
import { body, query } from "express-validator";

import { ProdutoController } from "../Controller/ProductController";
import { authMiddleware, roles } from "../Middlewares/AuthMiddlware";
import { validator } from "../Middlewares/validator";
import multer from "multer";
const controller = new ProdutoController();
import {v4 as uuid} from "uuid";
//Alterar para a pasta em que manteremos os arquivos
import {images_path} from "../Utils/paths";
import path from "path";

//PATH REFERENTE AO SERVIDOR Depois


export function withMessage(param: string) {
  return `Necessario informar parametro ${param}`;
}

const product = [
  body("name").notEmpty(),
  body("name").isString().withMessage(withMessage("name")),

  body("description").notEmpty(),
  body("description").isString().withMessage(withMessage("description")),

  body("photo").notEmpty(),
  body("photo").isString().withMessage(withMessage("photo")),

  body("categoryId").notEmpty(),
  body("categoryId").isInt().withMessage(withMessage("categoryId")),

  body("value").notEmpty(),
  body("value").isInt().withMessage(withMessage("value")),

  body("quantity").notEmpty(),
  body("quantity").isInt().withMessage(withMessage("quantity")),
];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, images_path);
  },
  filename: function (req:Request, file:any, cb:any) {
    const newFileName =
    uuid() + path.extname(file.originalname.toLowerCase());
    req.body.photo = newFileName;
    cb(null, newFileName);
  },
});


const upload = multer({
  storage,
  fileFilter: (req:Request, file:any, callback:any) => {
    if(file == undefined){
      callback(null, true);
    }
    var ext = path.extname(file.originalname.toLowerCase());
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return callback(new Error("Arquivo não permitido!"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 10485760 / 2, //5MB
  },
});


const router = Router();
router.get(`/:storeId`, authMiddleware, controller.getAllProducts);
router.get(`/:storeId/:productId`, authMiddleware, controller.getProductById);
router.put(
  `/:storeId/:productId`,
  upload.single("file"),
  authMiddleware,
  roles(["admin", "master"]),
  controller.updateProduct
);
router.post(
  `/:storeId`,
  authMiddleware,
  roles(["admin", "master"]),
  upload.single("file"),
  ...product,
  validator,
  controller.createProduct
);


router.delete(
  `/:storeId/:productId`,
  authMiddleware,
  roles(["admin", "master"]),
  controller.deleteProductById
);







export default router;
