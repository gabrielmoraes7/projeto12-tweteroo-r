import express, { json } from "express";
import cors from "cors";

//Criação da base da API utilizando o Express
const app = express();

app.use(cors());
app.use(json());

//Variaveis globais referentes as principais aplicações das rotas
const users = [];
const tweets = [];

//Conexão ao servidor na porta 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`));
