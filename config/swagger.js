const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Catálogo de Filmes API',
      version: '1.0.0',
      description: 'Uma API para gerenciar filmes, notas, comentários e usuários.',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Atualize para o URL base da sua API
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./routes/*.js'], // Certifique-se de que as rotas estão sendo referenciadas corretamente
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
