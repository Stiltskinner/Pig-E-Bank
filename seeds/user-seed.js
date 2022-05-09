const { User } = require('../models');

const userData = [
  {
    email: 'Test@test.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
