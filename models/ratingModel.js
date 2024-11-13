const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Rating = sequelize.define('Rating', {
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  FilmId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Films',
      key: 'id',
    },
  },
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  }
});

module.exports = Rating;
