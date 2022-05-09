const sequelize = require('../config/config');
const seedPigs = require('./pig-seed');
const seedUsers = require('./user-seed');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPigs();

  process.exit(0);
};

seedAll();