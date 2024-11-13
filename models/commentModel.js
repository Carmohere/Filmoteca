const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
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

module.exports = Comment;
