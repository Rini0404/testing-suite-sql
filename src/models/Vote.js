const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Vote = sequelize.define('Vote', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  pollOptionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pollOptions',
      key: 'id'
    }
  }
});

module.exports = Vote;