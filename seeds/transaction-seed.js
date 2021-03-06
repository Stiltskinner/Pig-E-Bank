const { Transaction } = require('../models');

const transactionData = [
  {
    transaction_amt: 400.00,
    merchant: "Amazon",
    user_id: 1,
    pigs_id: 1,
    is_savings: false,
    money_id: 1
  },
  {
    transaction_amt: 200.00,
    merchant: "Wal-Mart",
    user_id: 1,
    pigs_id: 2,
    is_savings: false,
    money_id: 1
  },
  {
    transaction_amt: 100.00,
    merchant: "City of Austin",
    user_id: 1,
    pigs_id: 3,
    is_savings: false,
    money_id: 1
  },
  {
    transaction_amt: 500.00,
    merchant: "Amazon",
    user_id: 1,
    pigs_id: 4,
    is_savings: false,
    money_id: 1
  },
];

const seedTransaction = () => Transaction.bulkCreate(transactionData);

module.exports = seedTransaction;
