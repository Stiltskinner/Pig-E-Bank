const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Pigs extends Model {}

Pigs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    is_savings: {
      type: DataTypes.BOOLEAN,
    },
    amount_due: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: true
      },
      allowNull: true
    },
    amount_held: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: true
      },
      allowNull: false,
    },
    direct_deposit: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      },
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      },
      allowNull: true,
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
    modelName: 'pigs',
  }
);

module.exports = Pigs;
