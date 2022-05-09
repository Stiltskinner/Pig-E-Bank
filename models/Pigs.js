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

module.exports = Post;
