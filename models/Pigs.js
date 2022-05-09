const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Pig extends Model {}

Pig.init(
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
      type: DataTypes.DATE,
      validate: {
        isDate: true
      },
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      },
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    references: {
    model: 'user',
    key: 'id',
  }
}
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Pig;
