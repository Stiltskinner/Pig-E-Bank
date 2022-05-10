const { Transaction } = require('../models');

const transactionData = [
  {
    transaction_amt: 400.00,
    user_id: 1,
    pigs_id: 1,
    is_savings: false,
    money_id: 1
  }
];

const seedTransaction = () => Transaction.bulkCreate(transactionData);

module.exports = seedTransaction;
