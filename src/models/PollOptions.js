const { DataTypes } = require('sequelize');
const sequelize = require('../db');

/**
 * PollOption model
 * Each PollOption belongs to a Feed
 * for example, if we are choosing what HR department is the best we would have one pollOption for each department, and all those options will pertains to the same Feed. With its respected ID. 
 */

// we can keep the image in the actual feed model, doesnt have to be here.

const PollOption = sequelize.define('PollOption', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  feedId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'feeds',
      key: 'id'
    }
  },
  voteCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },

});

module.exports = PollOption;