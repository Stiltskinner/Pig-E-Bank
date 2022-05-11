const { Sequelize, Model, DataTypes, } = require('sequelize');
const sequelize = require('../config/config');

class Transaction extends Model {}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    transaction_amt: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    merchant: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    pigs_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'pigs',
        key: 'id'
      },
    },
    is_savings: {
      type:DataTypes.BOOLEAN,
    },
    money_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'money',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'transaction',
  }

);

module.exports = Transaction;