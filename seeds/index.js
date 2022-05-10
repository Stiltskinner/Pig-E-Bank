const sequelize = require('../config/config');
const seedMoney = require('./money-seed');
const seedPigs = require('./pig-seed');
const seedUsers = require('./user-seed');
const seedTransaction = require('./transaction-seed');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPigs();
    await seedMoney();
    await seedTransaction();

  process.exit(0);
};

seedAll();