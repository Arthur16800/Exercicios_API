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
    // Define uma rota GET para o caminho health
    this.express.get("/health/",(req, res) => {
        res.send({nome:"Arthur", idade:"17", CPF:"474.226.228.06"});
    });//Essa rota é usada para verificar se a API esta OK
  }
}

// Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppControler().express
