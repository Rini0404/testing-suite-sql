const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./Users');

const FEED_TYPE = {
  POLL: 'poll',
  POST: 'post',
};

const Feed = sequelize.define('Feed', {
  // ID attribute
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  //   Maps to VARCHAR in databases like MySQL and PostgreSQL.
  // Limited to a certain length that you can specify ( DataTypes.STRING(255) would limit the string to 255 characters).
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM,
    values: [FEED_TYPE.POLL, FEED_TYPE.POST],
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // 'users' refers to the table name, make sure it's correct
      key: 'id'
    }
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  // Other potential fields...
});


module.exports = {
  Feed,
  FEED_TYPE,
};
