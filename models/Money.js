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
      type: DataTypes.DECIMAL(10, 2),
    },
    checking: {
      type: DataTypes.DECIMAL(10, 2),
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
    },   
  },

},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'money',
  }
);

module.exports = Money;