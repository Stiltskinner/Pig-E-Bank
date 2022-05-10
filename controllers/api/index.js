const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const pigsRoutes = require('./pigs-routes.js');
const moneyRoutes = require('./money-routes.js');

router.use('/user', userRoutes);
router.use('/pigs', pigsRoutes);
router.use('/money', moneyRoutes);

module.exports = router;