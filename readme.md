<h1 align="center">
  <img alt="Bazar Grátis" title="Bazar Grátis" src="./README/bazargratis.png" width="220px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Diagrama</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execução">Execução</a>
</p>



## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
-[Node.js](https://nodejs.org/en/download/)
-[TypeScript](https://www.typescriptlang.org/)
-[Express](https://expressjs.com/)
-[MySql](https://www.mysql.com/)
-[Prisma](https://www.prisma.io/)

## 💻 Projeto

O Gerenciamento Bazar Gratis é uma aplicação no formato de e-commerce, para gerenciar e otimizar processos de compra de produtos através de um programa de pontuação. O sistema visa auxiliar o projeto social chamado Bazar Grátis, constituído pelos membros da Igreja de Deus Internacional, que realiza doações de alimentos para comunidade mais carente.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/I0u4VKsLQddgfqUJOdckGH/TCC?node-id=0%3A1&t=k8siurD41uTST637-0). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## ⚙️ Execução

Para executar o projeto você precisa ter instalado em sua máquina uma versão do [node js](https://nodejs.org/en/download/) a partir da 15.9 e uma versão do [mysql](https://dev.mysql.com/downloads/installer/) a partir da 8. 


Para baixar todas as dependencias do aplicativo utilize o comando <strong>npm install</strong>;

Para executar utilize o comando <strong>npm start</strong>, o programa será iniciado na porta 3988 de sua máquina. Também é possível intalar e utilizar o [front-end](https://github.com/Ludimilla1325/tcc_frontend_bazar_gratis) desta aplicação.

A pasta backup contêm um back up de dados para que o sistema seja alimentado e funcione da forma esperada. 
Também é preciso criar na raiz do projeto um arquivo chamado [.env](https://www.npmjs.com/package/dotenv) com as configurações de seu banco de dados com as varaveis a seguinte variavel:
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE