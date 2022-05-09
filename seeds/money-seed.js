const { Money } = require('../models');

const moneyData = [
  {
    savings: 1000.00,
    checking: 2000,
    user_id: 1,
  }
];

const seedMoney = () => Money.bulkCreate(moneyData);

module.exports = seedMoney;
