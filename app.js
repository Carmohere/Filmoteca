const express = require('express'); // Importa o Express
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');


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


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

console.log(app._router.stack.map((r) => r.route?.path).filter(Boolean));

//
const sequelize = require('./config/config');

sequelize.sync().then(() => {
  console.log('Banco de dados conectado e sincronizado.');
});
