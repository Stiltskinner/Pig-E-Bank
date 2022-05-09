<<<<<<< Updated upstream
const { Sequelize, Model, DataTypes } = require('sequelize');
=======
const { Sequelize, Pigs, DataTypes } = require('sequelize');
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
=======
    
>>>>>>> Stashed changes


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

<<<<<<< Updated upstream
module.exports = Pigs;
=======
module.exports = Pig;
>>>>>>> Stashed changes
