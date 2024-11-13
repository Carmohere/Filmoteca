const swaggerJSDoc = require('swagger-jsdoc');

// Defina a configuração básica do Swagger
const options = {
  definition: {
    openapi: '3.0.0', // Versão da especificação OpenAPI
    info: {
      title: 'Catálogo de Filmes API',
      version: '1.0.0',
      description: 'Uma API simples para gerenciar filmes, notas, comentários e recomendações.',
    },
  },
  // Caminho onde as rotas estão localizadas para extrair informações do JSDoc
  apis: ['./routes/*.js'], // Defina o caminho para as suas rotas
};

// Gerar o Swagger
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
