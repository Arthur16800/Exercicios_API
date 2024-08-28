// Importar a intância do Express configurada em index.js
const app = require("./index");

// Inicia o servidor na porta 5000 da máquina
// Neste caso como esta local a API será acessível em http://localhost:5000/
app.listen(5000);
