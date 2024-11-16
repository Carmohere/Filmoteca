const express = require('express'); // Importa o Express
const swaggerUi = require('swagger-ui-express'); // Importa o Swagger
const swaggerSpec = require('./config/swagger'); // Configuração do Swagger

const app = express(); // Inicializa o Express

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Rotas (adicione as suas rotas aqui)
const filmRoutes = require('./routes/filmRoutes');
app.use('/films', filmRoutes);

// Configuração do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Porta do servidor
const port = 3000;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
