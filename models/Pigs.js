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
<<<<<<< HEAD
    savings: {
=======
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
>>>>>>> 5bd12418ff3dbec4fde866eb7dc59e865282feba
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

<<<<<<< HEAD
module.exports = Post;

=======
module.exports = Pig;
>>>>>>> 5bd12418ff3dbec4fde866eb7dc59e865282feba
