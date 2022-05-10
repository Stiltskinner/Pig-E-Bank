const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const pigsRoutes = require('./pigs-routes.js');
const moneyRoutes = require('./money-routes.js');
const transactionRoutes =require('./transaction-routes.js');

router.use('/user', userRoutes);
router.use('/pigs', pigsRoutes);
router.use('/money', moneyRoutes);
router.use('/transaction', transactionRoutes);

module.exports = router;