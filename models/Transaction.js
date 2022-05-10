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
      types:DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    user_id: {
      references: {
        model: 'user',
        key: 'id',
      },
    },
    pigs_id: {
      references: {
        model:'pigs',
        key: 'id'
      },
    },
    is_savings: {
      type:DataTypes.BOOLEAN,
    },
    money_id: {
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