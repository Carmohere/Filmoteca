const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const sequelize = require('./config/database');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const filmRoutes = require('./routes/filmRoutes');

// Rotas
app.use('/auth', authRoutes);
app.use('/films', filmRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Banco de dados
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado!');
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });
