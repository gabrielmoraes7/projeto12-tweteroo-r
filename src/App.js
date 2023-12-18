import express, { json } from "express";
import cors from "cors";

//Criação da base da API utilizando o Express
const app = express();

app.use(cors());
app.use(json());

//Variaveis globais referentes as principais aplicações das rotas
const users = [];
const tweets = [];

//ROTAS GET E POST:

//POST: /sign-up 
  app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    users.push(
      { 
        username,
         avatar
      }
    );
    res.send("OK"); 
  }
  );

  // POST /tweets
  app.post("/tweets", (req, res) => {

    //Corpo do tweet
    const { username, tweet } = req.body;

    //Verifica se o usuario esta de fato cadastrado varendo a matriz user com o username passado pela body como parametro de referência
    const userExists = users.find((user) => user.username === username);

    //Caso ele não esteja na matriz dos usuarios é colocado como um acesso não autorizado(UNAUTHORIZED)
    if (!userExists) return res.send("UNAUTHORIZED");
    
    //Posta o tweet
    tweets.push({ username, tweet });
    res.send("OK");
});

//Conexão ao servidor na porta 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`));
