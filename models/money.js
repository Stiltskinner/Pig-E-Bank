const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Money extends Model {}

Money.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    savings: {
      type: DataTypes.INTEGER,
    },
    checking: {
      type: DataType.INTEGER,
    },
    user_id: {

    },
    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Money;

