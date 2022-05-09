const { Pigs } = require('../models');

const pigsData = [
  {
    name: 'test_pig',
    is_savings: true,
    amount_due: 200,
    amount_held: 300,
    direct_deposit: '2022-05-10',
    due_date: '2022-05-30',
    user_id: 1
  },
  {
    name: 'Larry the pig',
    is_savings: true,
    amount_due: 100,
    amount_held: 200,
    direct_deposit: '2022-06-10',
    due_date: '2022-06-30',
    user_id: 1
  },
  {
    name: 'Sheila the Pig',
    is_savings: true,
    amount_due: 400,
    amount_held: 400,
    direct_deposit: '2022-05-03',
    due_date: '2022-05-29',
    user_id: 1
  },
];

const seedPigs = () => Pigs.bulkCreate(pigsData);

module.exports = seedPigs;
