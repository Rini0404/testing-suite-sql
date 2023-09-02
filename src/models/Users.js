const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ROLES = {
  ADMIN: 'admin',
  BASIC: 'basic',
};

const User = sequelize.define('User', {
  // ID attribute
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ROLES.BASIC,
  },
  moviesLiked: [ DataTypes.STRING ],


});


module.exports = User;
