const { Money } = require('../models');

const moneyData = [
  {
    savings: 1000.00,
    checking: 2000,
    user_id: 1,
  },
  {
    savings: 787.00,
    checking: 1534.32,
    user_id: 2,
  },
  {
    savings: 124521.23,
    checking: 875476.23,
    user_id: 3,
  },
  {
    savings: 63451.30,
    checking: 5315,
    user_id: 4,
  },
  {
    savings: 1200.51,
    checking: 1300,
    user_id: 5,
  }
];

const seedMoney = () => Money.bulkCreate(moneyData);

module.exports = seedMoney;
