const { User } = require('../models');

const userData = [
  {
    first_name: "Johnny",
    last_name: "Moneymaker",
    email: 'Test@test.com',
    password: 'password123',
  },
  {
    first_name: "Sarah",
    last_name: "Silver",
    email: 'Sarah@test.com',
    password: 'password123',
  },
  {
    first_name: "Tom",
    last_name: "Cruise",
    email: 'Tom@test.com',
    password: 'password123',
  },
  {
    first_name: "Josh",
    last_name: "Jackson",
    email: 'Josh@test.com',
    password: 'password123',
  },
  {
    first_name: "Laila",
    last_name: "Jackson",
    email: 'Laila@test.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
