import { prisma } from "../../../Prisma/client";
import { hash, compare } from "../../../Utils/hashUtils";
import { secret } from "../../../Utils/tokenSecret";
import jwt from "jsonwebtoken";
const nodemailer = require("nodemailer");

export async function sendLinkToResetPass(email: string) {
  try {
    const userAlreadyExists = await prisma.client.findFirst({
      where: {
        email: email,
      },
    });

    if (!userAlreadyExists) {
      return {
        sucess: false,
        data: null,
        message: "Usuãrio não encontrado",
      };
    }

    const secretKey = secret + userAlreadyExists.password;

    const token = jwt.sign(
      { email: userAlreadyExists.email, id: userAlreadyExists.id },
      secretKey,
      { expiresIn: "5m" }
    );

    const link = `http://localhost:3987/client/reset-password/${userAlreadyExists.id}/${token}`;

    const transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "bazargratistcc@gmail.com",
        pass: "nuvrrmvojtuioqid",
      },
    });

    const mailOptions = {
      from: "bazargratistcc@gmail.com",
      to: email,
      subject: "Link de reset da senha",
      text: link,
    };

    const oi = await transporter.sendMail({
      from: "bazargratistcc@gmail.com",
      to: email,
      subject: "Link de reset da senha",
      text: link,
    });
    if (!oi) {
      return { sucess: false, data: null, message: "Erro ao enviar email" };
    }

    return {
      sucess: true,
      data: link,
      message: "Email enviado com sucesso",
    };
  } catch (error) {
    return { sucess: false, data: null, message: "Problema" };
  }
}
