const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Filmoteca API',
      version: '1.0.0',
      description: 'Uma API para gerenciar filmes.',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Atualize para o seu URL base
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'], // Certifique-se de que suas rotas estão sendo referenciadas corretamente
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
