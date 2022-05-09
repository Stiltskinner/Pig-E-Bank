const { Sequelize, Money, DataTypes } = require('sequelize');
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
      allowNull: false,
    },
    checking: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataType.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },


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

module.exports = Post;

