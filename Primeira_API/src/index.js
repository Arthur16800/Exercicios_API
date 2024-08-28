const express = require("express"); //importa o módulo do Express

// Define uma classe para organizar a lógica da aplicação
class AppControler {
  constructor() {
    // Cria uma nova instância do Express dentro da classe
    this.express = express();

    // Chama o  método middlewares para configurar os middlewares
    this.middlewares();

    // Chama o método routes para definir as rotas da API
    this.routes();
  }
  middlewares() {
    // Permitir que a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }

  //Define as rotas da nossa API   
  routes() {

    const users = [];
  //req = request  res = response
    this.express.post("/users", (req, res)=>{
      const {id, nome, email, senha} = req.body;
      users.push({id, nome, email, senha});
      res.status(200).send({message:"Usuario cadastrado com sucesso!"});
    });

    this.express.post("/auth", (req, res)=>{
      const {email, senha} = req.body;
      const user = users.find((user) => user.email == email && user.senha == senha);

      if(user){
        res.status(200).send({message:"Usuario encontrado com sucesso!"});
      }
      else{
        res.status(400).send({message:'Usuário não encontradoo'});
      }
       
    })

    this.express.get("/users/:id", (req, res)=>{
      const {id} = req.params;
      console.log(id)
      const user = users.find((user) => user.id == id);
             
      if(user){
        res.status(200).send(user);
      }
      else{
        res.status(400).send({message:'Usuário não encontrado'});
      }
      console.log(user)
      console.log(users)
    });

    // Define uma rota GET para o caminho health
    this.express.get("/health/",(req, res) => {
        res.send({ status:"OK", nome:"Arthur"});
    });//Essa rota é usada para verificar se a API esta OK
  }
}

// Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppControler().express
