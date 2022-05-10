const { User } = require('../models');

const userData = [
  {
    first_name: 'bob',
    last_name: 'miracle',
    email: 'Test@test.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
