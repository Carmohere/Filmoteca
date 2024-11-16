const { Sequelize } = require('sequelize');

// Cria a instância do Sequelize com SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Caminho do arquivo do banco de dados
  logging: false, // Desabilita os logs das queries no console
});

module.exports = sequelize;
