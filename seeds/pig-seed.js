const { Pigs } = require('../models');

const pigsData = [
  {
    name: 'rent',
    is_savings: true,
    amount_due: 800,
    amount_held: 900,
    direct_deposit: '2022-05-10',
    due_date: '2022-05-30',
    user_id: 1
  },
  {
    name: 'utilities',
    is_savings: false,
    amount_due: 100,
    amount_held: 200,
    direct_deposit: '2022-06-10',
    due_date: '2022-06-30',
    user_id: 1
  },
  {
    name: 'food',
    is_savings: true,
    amount_held: 400,
    direct_deposit: '2022-05-03',
    user_id: 1
  },
  {
    name: 'entertainment',
    is_savings: true,
    amount_due: 400,
    amount_held: 400,
    direct_deposit: '2022-05-03',
    user_id: 1
  },
  {
    name: 'rent',
    is_savings: true,
    amount_due: 800,
    amount_held: 900,
    direct_deposit: '2022-05-10',
    due_date: '2022-05-30',
    user_id: 2
  },
  {
    name: 'utilities',
    is_savings: true,
    amount_due: 100,
    amount_held: 200,
    direct_deposit: '2022-06-10',
    due_date: '2022-06-30',
    user_id: 2
  },
  {
    name: 'food',
    is_savings: true,
    amount_held: 400,
    direct_deposit: '2022-05-03',
    user_id: 2
  },
  {
    name: 'entertainment',
    is_savings: true,
    amount_due: 400,
    amount_held: 400,
    direct_deposit: '2022-05-03',
    user_id: 2
  },
];


const seedPigs = () => Pigs.bulkCreate(pigsData);

module.exports = seedPigs;
